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
    <div className="container mx-auto px-4">
      {/* 讓區塊高度佔滿整個視口 */}
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center">
        <div>
          <h1 className="text-4xl font-bold">關於我們</h1>
          <p className="mt-4 text-lg text-gray-700">
            歡迎來到逐日交易聯盟，這是我們的交易團隊，我們是注重長期獲利CRYPTO團隊。
            <br/>現在賠錢沒關係長期獲利才是勝利，來日方長🔥
          </p>
        </div>

        {/* Logo 放在右下角 + 透明度 50% */}
        <div className="absolute bottom-4 right-4 opacity-50">
          <Image
            src="https://cdn.sunary.tw/Sunary.png"
            alt="logo"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
