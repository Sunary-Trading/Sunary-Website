"use client";
import { usePathname } from "next/navigation";
import { House, Users } from "lucide-react";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface DockItem {
  icon: ReactElement;
  label: string;
  path: string;
}

const dockItems: DockItem[] = [
  {
    icon: <House className="w-[30px] h-auto" />,
    label: "首頁",
    path: "/",
  },
  {
    icon: <Users className="w-[30px] h-auto" />,
    label: "關於我們",
    path: "/about",
  },
];

export default function DockBar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, width: 0, height: "65px" }}
      animate={{ opacity: 1, width: "auto", height: "65px" }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4"
    >
      <div className="grid grid-flow-col auto-cols-max gap-4 bg-stone-500/10 backdrop-blur-[10px] w-auto h-[75px] rounded-[80px] py-2.5 px-4 items-center justify-center">
        {dockItems.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.9 }}
              key={index}
              className={`flex flex-col items-center group border-2 p-[10px] rounded-[100%] cursor-pointer transition ${
                isActive
                  ? "bg-stone-700 border-stone-500/20 text-white"
                  : "border-stone-800/20 bg-stone-800/90"
              }`}
            >
              <span className="absolute bottom-[70px] px-2 py-1 bg-white text-stone-800 font-semibold text-[13px] rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap min-w-[60px] text-center">
                {item.label}
              </span>
              {item.icon}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
