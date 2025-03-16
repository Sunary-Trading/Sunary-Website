"use client";
import Threads from "@/components/Background/Thread";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Threads></Threads>
      <div className="absolute top-0 bg-gray-700/15 h-screen w-screen backdrop-blur-[2px]"></div>

      <div className="absolute top-0 h-screen w-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-web-green text-4xl font-bold mt-1.5 mb-1.5"
        >
          逐日交易聯盟
        </motion.div>
        <motion.div
          initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-gray-500 md:text-lg mt-1.5 mb-1.5 text-sm text-center"
        >
          【注重長期獲利的CRYPTO交易團隊】交易心態｜現貨介紹｜長期套利 逐日 to
          the sun☀
        </motion.div>
      </div>
    </div>
    // <div>
    //   <h1>Home</h1>
    // </div>
  );
}
