"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const transitionRef = useRef<HTMLDivElement>(null); // 轉場動畫元素
  const bgRef = useRef<HTMLDivElement>(null); // 轉場背景
  const pathname = usePathname(); // 取得當前路由
  const [isFirstLoad, setIsFirstLoad] = useState(true); // 是否為首次載入

  // **處理首次載入動畫**
  useEffect(() => {
    if (!transitionRef.current || !bgRef.current || !isFirstLoad) return;

    // 延遲 1 秒後開始動畫
    const timer = setTimeout(() => {
      gsap.to(transitionRef.current, {
        yPercent: -200, // 讓轉場元素完全滑出視野
        duration: 1.2,
        ease: "power4.inOut",
        onComplete: () => setIsFirstLoad(false),
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [isFirstLoad]);

  return (
    <>
      <div
        ref={transitionRef}
        className="fixed top-0 left-1/2 w-32 h-32 z-50 flex items-center justify-center"
        style={{ transform: "translate(-50%, -100%)" }}
      >
        <div
          ref={bgRef}
          className="bg absolute w-full h-full bg-gradient-to-br from-[#262626] to-[#454545] rounded-full"
        ></div>
        <img
          src="https://cdn.sunary.tw/logo_r.png"
          alt="Logo"
          className="img w-20 h-20 object-contain relative"
        />
      </div>
      <div className="contents">{children}</div>
    </>
  );
}

export const useCustomNavigation = () => {
  const router = useRouter(); // Next.js 路由控制
  const pathname = usePathname(); // 當前路由
  const [isAnimating, setIsAnimating] = useState(false); // 動畫狀態
  const [isRouteLoaded, setIsRouteLoaded] = useState(false); // 路由是否載入完成

  // 監聽路由變更事件
  useEffect(() => {
    setIsRouteLoaded(true);
  }, [pathname]);

  const handleRouteChange = (newPath: string) => {
    if (isAnimating || newPath === pathname) return; // 避免重複觸發
    setIsAnimating(true);
    setIsRouteLoaded(false); // 重置狀態，等待新頁面載入

    const transitionElement = document.querySelector(".fixed") as HTMLElement;
    const bgElement = transitionElement?.querySelector(".bg") as HTMLElement;

    const tl = gsap.timeline();

    // **1. 進場動畫**
    tl.fromTo(
      transitionElement,
      { top: "0", y: "-100%" },
      { top: "75%", y: "-100%", duration: 0.6, ease: "power2.out" }
    )
      .to(transitionElement, {
        top: "70%",
        duration: 0.4,
        ease: "power2.out",
      })
      .to(bgElement, { scale: 20, duration: 0.8, ease: "power4.in" })

      // **2. 切換路由**
      .add(() => {
        router.push(newPath);
      })

      // **3. 等待新頁面載入完成**
      .add(() => {
        const checkLoaded = setInterval(() => {
          if (isRouteLoaded) {
            clearInterval(checkLoaded);

            // **4. 背景縮小**
            gsap.to(bgElement, {
              scale: 1,
              duration: 0.8,
              ease: "power4.out",
              delay: 0.2,
            });

            // **5. 完整滑出頁面**
            gsap.to(transitionElement, {
              top: "100%",
              y: "0",
              duration: 0.6,
              ease: "power4.in",
              onComplete: () => {
                setIsAnimating(false);
                gsap.set(transitionElement, { top: "0", y: "-100%" });
              },
            });
          }
        }, 100);
      });
  };

  return { handleRouteChange };
};
