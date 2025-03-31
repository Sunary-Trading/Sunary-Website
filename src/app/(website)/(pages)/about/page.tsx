"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TeamMembers from "@/app/(website)/(pages)/about/_components/Card/TeamMembers";
import Features from "@/app/(website)/(pages)/about/_components/Card/Features";






export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'services' | 'philosophy'>('mission');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Content sections for the tabbed interface
  const tabContent = {
    mission: (
      <div className="space-y-4">
        <p>
          逐日 太陽總普照著世間，卻總有一些角落仍感受不到溫暖。
        </p>
        <p>
          幣圈與投資總是被貼上「詐騙」與「懷疑」的標籤，讓真正想學習、交流與成長的人，常常因他人的目的心而感到壓力與孤立。
        </p>
        <p>
          而逐日團隊如今來到了幣圈 就是帶給您一個豐富多元且溫暖的交易
          交流環境
        </p>
      </div>
    ),
    services: (
      <div className="space-y-4">
        <p>
          ☀️我們將運用團隊的部分佣金資源，根據您的需求，提供各類交易學習服務與師資，所有學習資源完全免費！所有的師資與教學成本全由逐日為你支付。
        </p>
        <p>
          ☀️我們與交易所合作，為團隊成員減免手續費，並提供逐日團隊專屬福利活動，讓你有機會獲取獎學金、發財金、抽獎機會及各種獎品。
        </p>
      </div>
    ),
    philosophy: (
      <div className="space-y-4">
        <p>
          更重要的是你並非是在單打獨鬥了 我們不是只是互利關係
          而是一群一起享受交易樂趣的朋友 有我們陪著你一起🫵
        </p>
        <p>
          不管您是小資族、大戶、散戶、還是學生 我們團隊不會在意您的階級身分
          只要您願意 就讓逐日成為照亮你們心中的太陽☀️
        </p>
        <p className="text-[#DA9060] font-medium mt-4">
          現在賠錢沒關係長期獲利才是勝利，來日方長🔥
        </p>
      </div>
    ),
  };

  return (
    <div className="bg-[#0a0f18] text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxYTFmMjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBNNjAgMzBNMzAgNjBNMzAgMCIgc3Ryb2tlPSIjMmEzMTQ0IiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#DA9060] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-[#DA9060] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-[#DA9060] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section - Reduced to 90vh for better content flow */}
      <section className="min-h-[90vh] flex items-center justify-center relative z-10 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-[#DA9060] mb-6 ${
              isLoaded
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            } transition-all duration-1000 ease-out`}
          >
            關於我們
          </h1>

          {/* Tabbed content interface for better organization */}
          <div 
            className={`max-w-3xl mx-auto ${
              isLoaded
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            } transition-all duration-1000 ease-out delay-300`}
          >
            <div className="border-b border-[#2a3144] flex justify-center mb-6">
              <button 
                className={`py-2 px-4 font-medium ${activeTab === "mission" ? "text-[#DA9060] border-b-2 border-[#DA9060]" : "text-gray-400 hover:text-gray-300"}`}
                onClick={() => setActiveTab("mission")}
              >
                使命
              </button>
              <button 
                className={`py-2 px-4 font-medium ${activeTab === "services" ? "text-[#DA9060] border-b-2 border-[#DA9060]" : "text-gray-400 hover:text-gray-300"}`}
                onClick={() => setActiveTab("services")}
              >
                服務
              </button>
              <button 
                className={`py-2 px-4 font-medium ${activeTab === "philosophy" ? "text-[#DA9060] border-b-2 border-[#DA9060]" : "text-gray-400 hover:text-gray-300"}`}
                onClick={() => setActiveTab("philosophy")}
              >
                理念
              </button>
            </div>
            
            <div className="text-left leading-relaxed text-lg">
              {tabContent[activeTab]}
            </div>
          </div>

          {/* Digital circuit decorative element */}
          <div className="mt-12 max-w-md mx-auto opacity-20">
            <svg
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                stroke="#DA9060"
                strokeWidth="1"
                fill="none"
                d="M10,50 L30,50 C35,50 35,20 40,20 L160,20 C165,20 165,80 170,80 L190,80"
              />
              <path
                stroke="#DA9060"
                strokeWidth="1"
                fill="none"
                d="M10,80 L30,80 L50,40 L70,60 L90,30 L110,70 L130,20 L150,50 L170,40 L190,40"
              />
              <circle cx="40" cy="20" r="3" fill="#DA9060" />
              <circle cx="70" cy="60" r="3" fill="#DA9060" />
              <circle cx="110" cy="70" r="3" fill="#DA9060" />
              <circle cx="150" cy="50" r="3" fill="#DA9060" />
              <circle cx="170" cy="80" r="3" fill="#DA9060" />
            </svg>
          </div>

          <div
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce ${
              isLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 delay-1000`}
          >
            <svg
              className="w-6 h-6 text-[#DA9060]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <Features />
        <TeamMembers />

        {/* CTA Section - Enhanced with animation */}
        <section id="cta" className="py-12 text-center relative scroll-mt-20">
          <div className="absolute inset-0 bg-[#DA9060]/5 blur-xl rounded-full"></div>
          <div className="bg-[#131a29] p-8 rounded-lg border border-[#2a3144] relative hover:border-[#DA9060] transition-all duration-300 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="#DA9060"
              >
                <circle cx="75" cy="25" r="5" />
                <circle cx="25" cy="75" r="5" />
                <circle cx="75" cy="75" r="5" />
                <circle cx="50" cy="50" r="5" />
                <path
                  d="M25,25 L75,75 M75,25 L50,50 M25,75 L50,50"
                  stroke="#DA9060"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#DA9060] mb-4">
              加入逐日交易聯盟
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              與我們一起，在加密貨幣市場中尋找長期穩定的獲利機會。不再單打獨鬥，加入我們的社群，共同成長與學習。
            </p>

            <Link
              href="https://dc.sunary.tw"
              className="relative overflow-hidden bg-[#DA9060] hover:bg-[#c27a4f] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 group inline-block"
            >
              <span className="relative z-10">立即加入Discord</span>
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-x-0 transition-all duration-300 origin-right transform scale-x-100"></span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}