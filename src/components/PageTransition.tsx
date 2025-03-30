"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const transitionRef = useRef<HTMLDivElement>(null); // 轉場動畫元素的引用
  const bgRef = useRef<HTMLDivElement>(null); // 轉場背景的引用
  const pathname = usePathname(); // 取得當前路由
  const [isFirstLoad, setIsFirstLoad] = useState(true); // 是否為首次載入

  // 處理首次載入動畫
  useEffect(() => {
    if (!transitionRef.current || !bgRef.current || !isFirstLoad) return;

    // 延遲 1 秒後執行動畫
    const timer = setTimeout(() => {
      gsap.to(transitionRef.current, {
        yPercent: -200, // 讓轉場元素完全滑出視野
        duration: 1.2,
        ease: "power4.inOut",
        onComplete: () => setIsFirstLoad(false), // 設定為非首次載入，避免重複觸發
      });
    }, 1000);

    return () => clearTimeout(timer); // 清除計時器，避免記憶體洩漏
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
          className="absolute w-full h-full bg-black rounded-full"
        ></div>
        <img
          src="https://cdn.sunary.tw/logo_r.png"
          alt="Logo"
          className="w-20 h-20 object-contain relative"
        />
      </div>
      <div className="contents">{children}</div>
    </>
  );
}

export const useCustomNavigation = () => {
  const router = useRouter(); // 取得 Next.js 的路由控制
  const pathname = usePathname(); // 取得當前路由
  const [isAnimating, setIsAnimating] = useState(false); // 是否正在播放動畫

  const handleRouteChange = (newPath: string) => {
    if (isAnimating || newPath === pathname) return; // 避免重複觸發
    setIsAnimating(true);

    const transitionElement = document.querySelector(".fixed") as HTMLElement; // 取得轉場元素
    const bgElement = transitionElement?.querySelector(
      ".absolute"
    ) as HTMLElement; // 取得背景

    // 建立 GSAP 動畫序列
    const tl = gsap.timeline();

    // 1. 從頁面上方完整滑入，先過頭然後回到中心點
    tl.fromTo(
      transitionElement,
      {
        top: "0",
        y: "-100%",
      },
      {
        top: "75%", // 先過頭到畫面的65%位置
        y: "-100%",
        duration: 0.6,
        ease: "power2.out",
      }
    )
      // 1.5 回彈到正中央
      .to(transitionElement, {
        top: "70%",
        duration: 0.4,
        ease: "power2.out", // 使用back.out效果讓它有回彈感
      })
      // 2. 背景展開
      .to(bgElement, {
        scale: 20,
        duration: 0.8,
        ease: "power4.in",
      })
      // 3. 切換路由
      .add(() => {
        router.push(newPath);
      })
      // 4. 背景縮小
      .to(bgElement, {
        scale: 1,
        duration: 0.8,
        ease: "power4.out",
        delay: 0.2,
      })
      // 5. 完整滑出頁面
      .to(transitionElement, {
        top: "100%",
        y: "0",
        duration: 0.6,
        ease: "power4.in",
        onComplete: () => {
          setIsAnimating(false);
          // 重置位置
          gsap.set(transitionElement, {
            top: "0",
            y: "-100%",
          });
        },
      });
  };

  return { handleRouteChange };
};