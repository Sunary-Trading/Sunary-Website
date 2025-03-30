import Image from "next/image";

const teamMembers = [
  {
    name: "張小明",
    role: "執行長",
    image: "/team/member1.jpg",
    description: "擁有10年軟體開發經驗，專注於創新技術解決方案。",
  },
  {
    name: "王大華",
    role: "技術總監",
    image: "/team/member2.jpg",
    description: "資深全端工程師，專精於系統架構設計。",
  },
  // 可以繼續添加更多團隊成員
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Image
        src={"https://cdn.sunary.tw/Sunary.png"}
        alt="logo"
        width={60}
        height={60}
      ></Image>
      {/* 關於我們標題區塊
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">關於我們</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          我們是一個充滿熱情的團隊，致力於提供最佳的技術解決方案。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">認識我們的團隊</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">我們的願景</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          我們致力於創造優質的數位體驗，透過創新的技術解決方案，
          幫助客戶實現其商業目標。我們相信，科技的力量可以改變世界，
          而我們正在為這個改變貢獻一份心力。
        </p>
      </div> */}
    </div>
  );
}
