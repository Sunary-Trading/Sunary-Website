"use client";
import React, { useEffect, useRef } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Threads,
  Youtube,
  Discord,
  Line,
} from "react-bootstrap-icons";
import { motion } from "framer-motion";

import Image from "next/image";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 簡單的視差效果
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerElement = footerRef.current;
      const rect = footerElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        const gradientElement = footerElement.querySelector(
          ".gradient-circle"
        ) as HTMLElement;
        if (gradientElement) {
          const scrollPosition = window.scrollY;
          const offset = scrollPosition * 0.03;
          gradientElement.style.transform = `translate(-50%, -50%) scale(${
            1 + offset * 0.01
          })`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: <Youtube size={20} />,
      url: "https://youtube.com/@sunaryzuoyu2025?feature=shared",
      label: "Facebook",
    },
    {
      icon: <Threads size={20} />,
      url: "https://www.threads.net/@runsun2025?igshid=NTc4MTIwNjQ2YQ==",
      label: "Threads",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/runsun2025?igsh=MW1uNzI0YWplZDh1bA%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: <Discord size={20} />,
      url: "https://dc.sunary.tw",
      label: "Discord",
    },
    { icon: <Line size={20} />, url: "https://line.sunary.tw", label: "Line" },
  ];

  const quickLinks = [
    { name: "隱私政策", url: "#" },
    { name: "使用條款", url: "#" },
    { name: "常見問題", url: "#" },
    { name: "幫助中心", url: "#" },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full bg-gray-950 text-gray-300 py-12 relative overflow-hidden border-t border-gray-800"
    >
      {/* 科技感上邊框 */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-40" />

      {/* 動態光暈 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none gradient-circle">
        <div className="w-[400px] h-[400px] bg-gradient-radial from-[#DA9060]/30 via-[#DA9060]/10 to-transparent rounded-full blur-2xl opacity-30"></div>
      </div>

      {/* 網格背景 */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[size:40px_40px] before:bg-gray-700/10 before:bg-[linear-gradient(transparent_39px,#232323_1px),linear-gradient(90deg,transparent_39px,#232323_1px)] opacity-30"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo & 聯絡資訊 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <Image
                src={"https://cdn.sunary.tw/logo_r.png"}
                width={32}
                height={32}
                alt="logo"
                className="w-8 h-8 rounded-lg"
              ></Image>
              <span className="text-xl font-semibold tracking-wide text-white">
                逐日交易聯盟
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed mb-6 max-w-md">
              逐日交易聯盟，【交易心態｜現貨介紹｜長期獲利】注重長期獲利CRYPTO團隊，現在賠錢沒關係長期獲利才是勝利，來日方長
            </p>
          </motion.div>

          {/* 快速連結 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center">
              <div className="w-6 h-[2px] bg-[#DA9060] mr-3"></div>
              快速連結
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center"
                  >
                    <span className="w-3 h-[1px] bg-[#DA9060]/40 mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 訂閱區塊 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* <h3 className="text-lg font-medium text-white mb-6 flex items-center">
              <div className="w-6 h-[2px] bg-[#DA9060] mr-3"></div>
              保持聯繫
            </h3>
            <p className="text-sm text-gray-400 mb-4">訂閱我們的電子報以獲取最新資訊和優惠</p>
            
            <div className="flex items-stretch mb-6">
              <input 
                type="email" 
                placeholder="您的電子郵件" 
                className="bg-gray-900/60 border border-gray-700 rounded-l-md px-4 py-2 text-sm w-full focus:outline-none focus:border-[#DA9060] transition-colors duration-200"
              />
              <button className="bg-gradient-to-r from-[#DA9060] to-amber-600 text-white px-4 rounded-r-md hover:brightness-110 transition-all duration-200">
                訂閱
              </button>
            </div> */}

            <div>
              <p className="text-sm font-medium text-white mb-3">關注我們</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#DA9060]/20 hover:text-white hover:scale-110 transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="space-y-10 mt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-px bg-[#DA9060]/40"></div>
                  <p className="text-sm">
                    <span className="text-[#DA9060]">Email:</span>{" "}
                    service@sunary.tw
                  </p>
                </div>
                {/* <div className="flex items-center space-x-3">
                <div className="w-10 h-px bg-[#DA9060]/40"></div>
                <p className="text-sm"><span className="text-[#DA9060]">電話:</span> (02) 2345-6789</p>
              </div> */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 分隔線 */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8 opacity-50"></div>

        {/* 版權信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; 2025 - {new Date().getFullYear()} 逐日交易聯盟. 版權所有.
          </p>
          {/* <div className="mt-2 md:mt-0 flex space-x-3">
            <span>使用本網站即表示您同意我們的條款</span>
            <a href="#" className="text-[#DA9060] hover:underline">Cookie 政策</a>
          </div> */}
        </div>
      </div>

      {/* 右下角裝飾元素 */}
      <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden">
        <div className="absolute -bottom-16 -right-16 w-32 h-32 border-2 border-[#DA9060]/20 rounded-full"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 border border-[#DA9060]/10 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
