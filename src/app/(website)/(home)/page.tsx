"use client";
import Threads from "@/components/Background/Thread";
import Particles from "@/components/Background/Particles";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Particles
        particleColors={["#da9060", "#da9060"]}
        particleCount={400}
        particleSpread={6}
        speed={0.15}
        particleBaseSize={150}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="absolute top-0 bg-black/35 h-screen w-screen backdrop-blur-[2px] cursor-none"></div>

      <div className="absolute top-0 h-screen w-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-white text-4xl font-bold mt-1.5 mb-1.5"
        >
          逐日交易聯盟
        </motion.div>
        <motion.div
          initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-gray-300 md:text-lg mt-1.5 mb-1.5 text-sm text-center"
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
