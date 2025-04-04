import React from "react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Props = {
  features: FeatureItem[];
};

const features = [
  {
    title: "免費學幣",
    description:
      "提供各種加密貨幣交易學習資源與專業師資，讓每個人都能免費學習相關知識。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-book-copy-icon lucide-book-copy w-6 h-6 text-[#DA9060] mb-2"
      >
        <path d="M2 16V4a2 2 0 0 1 2-2h11" />
        <path d="M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12" />
        <path d="M5 14H4a2 2 0 1 0 0 4h1" />
      </svg>
    ),
  },
  {
    title: "交易優惠",
    description:
      "與交易所合作，提供更低手續費與返現，讓您投資更省成本，還能參加專屬福利與活動。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-tags-icon lucide-tags w-6 h-6 text-[#DA9060] mb-2"
      >
        <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
        <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
        <circle cx="6.5" cy="9.5" r=".5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "安心入圈",
    description:
      "提供免費個人諮詢，從零帶你認識幣圈，打造友善、安全、透明且公平的交流環境。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-thumbs-up-icon lucide-thumbs-up w-6 h-6 text-[#DA9060] mb-2"
      >
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      </svg>
    ),
  },
  {
    title: "友善社群",
    description:
      "建立一個友善、開放的交流社群，讓每個人都能輕鬆分享經驗、學習知識，並在這個環境中感受到支持與尊重。",
    icon: (
      <svg
        className="w-6 h-6 text-[#DA9060] mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ></path>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="mb-24 scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#DA9060] mb-10 text-center relative">
        團隊特色
        <span className="block h-1 w-16 bg-[#DA9060] mx-auto mt-2"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 bg-[#131a29] border border-[#2a3144] rounded-lg hover:border-[#DA9060] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#DA9060]/10"
          >
            <div className="flex items-start">
              <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#DA9060] group-hover:translate-x-1 transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
