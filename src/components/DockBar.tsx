"use client";
import { usePathname } from "next/navigation";
import {
  House,
  Users,
  CalendarCheck,
  CheckCheck,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { ReactElement, useState } from "react";
import { Discord, Line, Telegram } from "react-bootstrap-icons";
import { useCustomNavigation } from "./PageTransition";

import Image from "next/image";

interface DockItem {
  icon: ReactElement;
  label: string;
  path: string;
}

const dockItems: DockItem[] = [
  {
    icon: (
      <Image
        src={"https://cdn.sunary.tw/logo_r.png"}
        width={38}
        height={38}
        alt="Logo"
        className="w-[38px] h-auto"
      />
    ),
    label: "首頁",
    path: "/",
  },
  {
    icon: <CalendarCheck className="w-[30px] h-auto" />,
    label: "課程表",
    path: "/courses",
  },
  {
    icon: <CheckCheck className="w-[30px] h-auto" />,
    label: "官方驗證",
    path: "/verification",
  },
  // {
  //   icon: <Building2 className="w-[30px] h-auto" />,
  //   label: "交易所",
  //   path: "/exchanges",
  // },
  {
    icon: <Users className="w-[30px] h-auto" />,
    label: "關於我們",
    path: "/about",
  },
];

const dockOtherItems: DockItem[] = [
  {
    icon: <Discord className="w-[30px] h-auto" />,
    label: "加入Discord群組",
    path: "https://dc.sunary.tw/",
  },
  {
    icon: <Line className="w-[30px] h-auto" />,
    label: "加入Line群組",
    path: "https://line.sunary.tw/",
  },
];

export default function DockBar() {
  const pathname = usePathname();
  const { handleRouteChange } = useCustomNavigation();
  const [isFixed, setIsFixed] = React.useState(true);
  const [absoluteTop, setAbsoluteTop] = React.useState<number>(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const dockRef = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    footerRef.current = document.querySelector("footer");
    if (!footerRef.current || !dockRef.current) return;

    const handleScroll = () => {
      const footer = footerRef.current as HTMLElement;
      const dockHeight = dockRef.current?.offsetHeight || 0;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const footerOffsetTop = footer.offsetTop;
      const threshold = 10; 

      const distanceToFooter = footerOffsetTop - (scrollY + viewportHeight);

      setIsFixed(true);
      
      if (distanceToFooter <= threshold) {
        // 當接近footer時，調整bottom值使其保持在footer上方50px處
        const newBottom = Math.max(10, threshold - distanceToFooter - 10);
        if (dockRef.current) {
          dockRef.current.style.bottom = `${newBottom}px`;
        }
      } else {
        // 恢復默認bottom值
        if (dockRef.current) {
          dockRef.current.style.bottom = "10px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 奇幻風格粒子特效
  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 0.8, 0],
      scale: [0, 1, 0],
      y: [0, -40],
      transition: {
        duration: 1.5,
      },
    },
  };

  // Dock項目懸停動畫
  const itemVariants = {
    normal: {
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.0001,
      },
    },
    hover: {
      scale: 1.15,
      y: -5,
      transition: {
        type: "spring",
        duration: 0.0001,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        type: "spring",
        duration: 0.0001,
      },
    },
  };

  // 標籤動畫
  const labelVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 0.96,
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 20,
        delay: 0.05,
      },
    },
  };

  return (
    <>
      {/* {!isFixed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 w-full h-[150px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(218, 144, 96, 0.15) 40%, rgba(218, 144, 96, 0.3))",
            backdropFilter: "blur(15px)",
          }}
        />
      )} */}
      <motion.div
        ref={dockRef}
        initial={{ opacity: 0, y: 50, width: 0, height: "65px" }}
        animate={{ opacity: 1, y: 0, width: "auto", height: "65px" }}
        transition={{
          duration: 0.6,
          ease: [0.19, 1, 0.22, 1],
          delay: 0.2,
        }}
        className={`${
          isFixed ? "fixed" : "absolute"
        } left-1/2 transform -translate-x-1/2 mb-2 z-50`}
        style={isFixed ? { bottom: "10px" } : { top: absoluteTop }}
      >
        <motion.div
          className="bg-stone-500/10 backdrop-blur-[10px] w-auto h-[58px] rounded-[80px] flex items-center justify-center border border-white/20 shadow-lg"
          initial={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
          animate={{ boxShadow: "0 8px 20px rgba(218, 144, 96, 0.2)" }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div className="grid gap-4 grid-flow-col auto-cols-max px-4 py-2.5 items-center justify-center">
            {dockItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <motion.div
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  key={index}
                  onClick={() => handleRouteChange(item.path)}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  variants={itemVariants}
                  initial="normal"
                  whileHover="hover"
                  whileTap="tap"
                  className={`flex flex-col items-center group border-2 p-[5px] rounded-[100%] cursor-pointer transition ${
                    isActive
                      ? "bg-stone-700/50 border-none text-white"
                      : "border-stone-800/20 bg-stone-800/10"
                  } duration-300 relative overflow-visible`}
                >
                  <div className="flex items-center justify-center">
                    <motion.span
                      animate={{
                        filter: isActive
                          ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))"
                          : "drop-shadow(0 0 0 rgba(255, 255, 255, 0))",
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {item.icon}
                    </motion.span>
                    <motion.span
                      className="absolute bottom-[55px] px-3 py-1.5 bg-white text-stone-800 font-medium text-[13px] rounded-lg shadow-lg whitespace-nowrap min-w-[70px] text-center"
                      variants={labelVariants}
                      initial="hidden"
                      animate={hoveredItem === index ? "visible" : "hidden"}
                    >
                      {item.label}
                    </motion.span>

                    {/* 懸停時顯示的魔法粒子效果 */}
                    {hoveredItem === index && (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-amber-300"
                            variants={particleVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                              left: `${10 + Math.random() * 20}px`,
                              top: `${Math.random() * 10}px`,
                              rotate: `${Math.random() * 360}deg`,
                            }}
                            transition={{
                              delay: i * 0.1,
                              repeat: Infinity,
                              duration: 1 + Math.random() * 0.5,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            className="relative w-[3px] h-[25px] bg-gray-500/80 rounded-[20px]"
            initial={{ height: 0, width: "0px" }}
            animate={{
              height: "25px",
              width: "3px",
              background: [
                "rgba(128, 128, 128, 0.8)",
                "rgba(218, 144, 96, 0.8)",
                "rgba(128, 128, 128, 0.8)",
              ],
            }}
            transition={{
              duration: 3,
            }}
          ></motion.div>
          <div className="grid gap-4 grid-flow-col auto-cols-max px-4 py-2.5 items-center justify-center">
            {dockOtherItems.map((item, index) => {
              const itemIndex = index + dockItems.length;
              return (
                <motion.div
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                  key={index}
                  onClick={() => window.open(item.path, "_blank")}
                  onMouseEnter={() => setHoveredItem(itemIndex)}
                  onMouseLeave={() => setHoveredItem(null)}
                  variants={itemVariants}
                  initial="normal"
                  whileHover="hover"
                  whileTap="tap"
                  className="flex flex-col items-center group border-2 p-[4px] rounded-[100%] cursor-pointer transition border-stone-800/20 bg-stone-800/10 duration-300 relative overflow-visible"
                >
                  <div className="flex items-center justify-center">
                    <motion.span
                      className="absolute bottom-[55px] px-3 py-1.5 bg-white text-stone-800 font-medium text-[13px] rounded-lg shadow-lg whitespace-nowrap min-w-[70px] text-center"
                      variants={labelVariants}
                      initial="hidden"
                      animate={hoveredItem === itemIndex ? "visible" : "hidden"}
                    >
                      {item.label}
                    </motion.span>
                    <span>{item.icon}</span>

                    {/* 懸停時顯示的魔法粒子效果 */}
                    {hoveredItem === itemIndex && (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-amber-300"
                            variants={particleVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                              left: `${10 + Math.random() * 20}px`,
                              top: `${Math.random() * 10}px`,
                              rotate: `${Math.random() * 360}deg`,
                            }}
                            transition={{
                              delay: i * 0.1,
                              repeat: Infinity,
                              duration: 1 + Math.random() * 0.5,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
