"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SunaryLogo from "@/images/icon/sunary_with_icon.png";
import { LinkData, IconData } from "@/config/FooterData";

const fabIcons = require("@fortawesome/free-brands-svg-icons");
const fasIcons = require("@fortawesome/free-solid-svg-icons");

const Footer = () => {

  return (
    <>
      <footer className="relative z-10 bg-neutral-200 pt-16 dark:bg-[rgba(41,44,53,0.3)] md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-col md:flex-row">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="https://cdn.sunary.tw/sunary_with_icon.png"
                    alt="logo"
                    className="w-full"
                    width={140}
                    height={140}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body dark:text-body-dark">
                 【注重長期獲利的CRYPTO現貨團隊】交易心態｜現貨介紹｜長期套利逐日 to the sun☀
                </p>
                <div className="flex items-center">
                  {
                    IconData.map((data, index) => (
                      <a
                        key={index}
                        href={data.link}
                        target="_blank"
                        className="mr-6 text-body duration-300 hover:text-web-green dark:text-body-dark dark:hover:text-web-green"
                      >
                        <FontAwesomeIcon icon={fasIcons[data.icon] || fabIcons[data.icon]} className={`${data.size}`} />
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:flex w-full">
              {
                /* 底下的連結 */
                LinkData.map((data, index) => (
                  <div key={index} className="w-full px-4 ">
                    <div className="mb-12 lg:mb-16">
                      <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                        {data.title}
                      </h2>
                      <ul>
                        {
                          data.itemList.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={item.link}
                                className={`mb-4 inline-block text-base duration-300 hover:text-web-green dark:hover:text-web-green ${item.disabled ? 'pointer-events-none text-neutral-500 dark:text-neutral-900' : 'text-neutral-800 dark:text-neutral-600'}`}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body dark:text-white">
              © 2025 逐日交易聯盟 Sunary Trading ｜ All Rights Reserved. <br />
              © 2025 幣友科技 BITYO Tech.（開發） ｜ All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
