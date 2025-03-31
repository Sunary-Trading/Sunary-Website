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
	role: "執行長兼共同創辦人",
	image: "https://cdn.sunary.tw/Members/TershiXia.jpg",
	description: "一個來自台灣的大學生，正在透過自己的信念，正努力達成夢想的人。",
  },
  {
	name: "來日",
	role: "執行長兼共同創辦人",
	image: "https://cdn.sunary.tw/Members/xiaoyu.jpg",
	description: "暫無",
  },
  {
	name: "呱田",
	role: "講師兼共同創辦人",
	image: "https://cdn.sunary.tw/Members/Gaga.png",
	description: "暫無",
  },
  {
	name: "Y",
	role: "講師",
	image: "https://cdn.sunary.tw/Members/y.png",
	description: "暫無",
  },
  {
	name: "糖豆魚",
	role: "技術部工程師",
	image: "https://www.ptdtw.fun/Avatars/avatar02.png",
	description: "一個擁有五年開發經驗，追逐達成夢想的學生",
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
						<p className="text-gray-300">{member.description}</p>
					</div>
				))}
			</div>
			{/* Mobile scrollable view */}
			<div className="sm:hidden overflow-x-auto pb-6 -mx-6 px-6">
				<div className="flex space-x-4" style={{ width: `${teamMembers.length * 280}px` }}>
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
							<p className="text-gray-300 text-sm">{member.description}</p>
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
