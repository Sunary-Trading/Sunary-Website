import React from 'react';

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
	title: "創新驅動",
	description: "我們以創新技術為驅動力，持續突破傳統框架。",
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
		  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
		></path>
	  </svg>
	),
  },
  {
	title: "專業團隊",
	description: "很厲害你知道的",
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
		  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
		></path>
	  </svg>
	),
  },
  {
	title: "長期規劃",
	description: "專注長期獲利策略，不追求短期波動。",
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
		  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
		></path>
	  </svg>
	),
  },
  {
	title: "風險管理",
	description: "完善的風險控管機制，確保資產安全。",
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
