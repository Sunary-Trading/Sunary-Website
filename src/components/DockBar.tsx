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
import React, { ReactElement } from "react";
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
    path: "/courses",
  },
];

export default function DockBar() {
  const pathname = usePathname();
  const { handleRouteChange } = useCustomNavigation();

  return (
    <motion.div
      initial={{ opacity: 0, width: 0, height: "65px" }}
      animate={{ opacity: 1, width: "auto", height: "65px" }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-7 left-1/2 transform -translate-x-1/2 mb-2"
    >
      <div className="bg-stone-500/10 backdrop-blur-[10px] w-auto h-[58px] rounded-[80px] flex items-center justify-center">
        <motion.div className="grid gap-4 grid-flow-col auto-cols-max px-4 py-2.5 items-center justify-center">
          {dockItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                key={index}
                onClick={() => handleRouteChange(item.path)}
                className={`flex flex-col items-center group border-2 p-[5px] rounded-[100%] cursor-pointer transition ${
                  isActive
                    ? "bg-stone-700/50 border-none text-white"
                    : "border-stone-800/20 bg-stone-800/10"
                } hover:scale-110 hover:bg-stone-600/60 duration-120`}
              >
                <div className="flex items-center justify-center">
                  <span className="absolute bottom-[50px] px-2 py-1 bg-white text-stone-800 font-medium text-[13px] rounded opacity-0 scale-100 group-hover:opacity-100 group-hover:!scale-98 transition whitespace-nowrap min-w-[60px] text-center">
                    {item.label}
                  </span>
                  <span>{item.icon}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          className="relative w-[3px] h-[25px] bg-gray-500/80 rounded-[20px]"
          initial={{ height: 0, width: "0px" }}
          animate={{ height: "25px", width: "3px" }}
          transition={{ duration: 0.9 }}
        ></motion.div>
        <div className="grid gap-4 grid-flow-col auto-cols-max px-4 py-2.5 items-center justify-center">
          {dockOtherItems.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                key={index}
                onClick={() => window.open(item.path, "_blank")}
                className={`flex flex-col items-center group border-2 p-[4px] rounded-[100%] cursor-pointer transition border-stone-800/20 bg-stone-800/10 hover:scale-110 hover:bg-stone-600/60 duration-120`}
              >
                <div className="flex items-center justify-center">
                  <span className="absolute bottom-[50px] px-2 py-1 bg-white text-stone-800 font-medium text-[13px] rounded opacity-0 scale-100 group-hover:opacity-100 group-hover:!scale-98 transition whitespace-nowrap min-w-[60px] text-center">
                    {item.label}
                  </span>
                  <span>{item.icon}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
