import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

type Props = {
  teamMembers: TeamMember[];
};

const teamMembers = [
  {
    name: "夏特稀",
    role: "執行長 兼 共同創辦人",
    image: "https://cdn.sunary.tw/Members/TershiXia.jpg",
    description:
      "一個來自台灣的大學生，正在透過自己的信念，正努力達成夢想的人。",
  },
  {
    name: "來日",
    role: "執行長 兼 共同創辦人",
    image: "https://cdn.sunary.tw/Members/xiaoyu.jpg",
    description:
      "一位就讀設計系的大學生，在進入幣圈後，因感受到圈內互相批判與勢利的惡劣風氣，決定創立「逐日團隊」，並統整各方資源，致力於打造一個溫暖、友善且平等的交流環境。",
  },
  {
    name: "呱田",
    role: "講師 兼 共同創辦人",
    image: "https://cdn.sunary.tw/Members/Gaga.png",
    description:
      "在幣圈各大社群活躍擁有許多戰績，絲毫不藏私也不吝嗇分享市場分析觀點，在逐日以自身經驗傳授多元分析知識與技術。",
  },
  {
    name: "糖豆魚",
    role: "開發部工程師",
    image: "https://www.ptdtw.fun/Avatars/avatar02.png",
    description: "一個擁有五年開發經驗，追逐達成夢想的學生",
  },
  {
    name: "小永",
    role: "助理",
    image: "https://cdn.sunary.tw/Members/wang.jpg",
    description:
      "熱愛交易，為了在 交流中成長而無償加入，成為團隊助理，協助團隊事務及社群環境秩序維護。",
  },
  {
    name: "Y",
    role: "講師及分析師",
    image: "https://cdn.sunary.tw/Members/y.png",
    description:
      "一個在交易市場中學習的大學生 \n - \n《時間與經驗會證明你所做的一切》",
  },
  {
    name: "奇異果",
    role: "講師及分析師",
    image: "https://cdn.sunary.tw/Teacher/kilob.webp",
    description:
      "「交易的本質就是場賭博，而我的所學就只是提高自己在這場賭博的勝率而已」",
  },
  {
    name: "Una",
    role: "KOL",
    image: "https://cdn.sunary.tw/KOL/una.jpg",
    description:
      "「承認自己的平凡 比假裝高手更需要勇氣」\n土狗玩家與空投項目分享\n運用自身的影響力，讓幣圈交流生態友善",
  },
  {
    name: "寶寶狗",
    role: "KOL",
    image: "https://cdn.sunary.tw/KOL/bbg.jpg",
    description:
      "31天實盤765%\n政治學系｜盤面與消息面分析\n努力精進提升自身的影響力，讓幣圈風氣更好",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="mb-24 scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#DA9060] mb-10 text-center relative">
        核心團隊
        <span className="block h-1 w-16 bg-[#DA9060] mx-auto mt-2"></span>
      </h2>
      {/* Desktop view */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-[#131a29] border border-[#2a3144] p-5 rounded-lg hover:border-[#DA9060] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#DA9060]/10"
          >
            <div className="mb-4 relative w-28 h-28 mx-auto overflow-hidden rounded-full border-2 border-[#DA9060] group-hover:border-4 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DA9060]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-[#DA9060] text-center">
              {member.name}
            </h3>
            <p className="text-sm text-gray-400 mb-3 text-center">
              {member.role}
            </p>
            <p className="text-gray-300">
              {member.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
      {/* Mobile scrollable view */}
      <div className="sm:hidden overflow-x-auto pb-6 -mx-6 px-6">
        <div
          className="flex space-x-4"
          style={{ width: `${teamMembers.length * 280}px` }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-[#131a29] border border-[#2a3144] p-5 rounded-lg"
            >
              <div className="mb-4 relative w-24 h-24 mx-auto overflow-hidden rounded-full border-2 border-[#DA9060]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-[#DA9060] text-center">
                {member.name}
              </h3>
              <p className="text-xs text-gray-400 mb-3 text-center">
                {member.role}
              </p>
              <p className="text-gray-300">
                {member.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll hint for mobile */}
      <div className="sm:hidden text-center mt-4 text-sm text-gray-400">
        ← 左右滑動查看更多團隊成員 →
      </div>
      {/* Decorative dots */}
      <div className="flex justify-center mt-10 space-x-2">
        <div className="w-2 h-2 rounded-full bg-[#DA9060] opacity-80"></div>
        <div className="w-2 h-2 rounded-full bg-[#DA9060] opacity-60"></div>
        <div className="w-2 h-2 rounded-full bg-[#DA9060] opacity-40"></div>
        <div className="w-2 h-2 rounded-full bg-[#DA9060] opacity-20"></div>
      </div>
    </section>
  );
}
