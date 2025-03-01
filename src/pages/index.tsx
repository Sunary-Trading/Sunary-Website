import Button from "@/components/Button/Button";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InformationCircleIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import SEO from "@/config/SEO.json";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{SEO.Index.title}</title>
        <meta name="description" content={SEO.Index.description} />
        <meta property="og:title" content={SEO.Index.title} />
        <meta property="og:description" content={SEO.Index.description} />
        <meta property="og:image" content={SEO.Index.image} />
        {/* <meta property="og:url" content={`https://yourdomain.com/post/${post.frontMatter.id}`} /> */}
        <meta property="og:type" content={SEO.Index.type} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content={SEO.Index.title} />
        <meta name="twitter:description" content={SEO.Index.description} />
        <meta name="twitter:image" content={SEO.Index.image} />
      </Head>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  歡迎來到 逐日交易聯盟 <br /> Welcome to Sunary Trading
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl justify-text">
                  【注重長期獲利的CRYPTO現貨團隊】交易心態｜現貨介紹｜長期套利逐日 to the sun☀
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                {/* <Button
                  onClick={() => router.push('/about')}
                  className="rounded-sm bg-web-green px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-web-green/80 disabled:bg-web-green/60"
                  disabled
                  text="查看更多（不可用）">
                  <InformationCircleIcon className="w-5 mr-1"></InformationCircleIcon>
                </Button> */}
                <a href="https://dc.sunary.tw" target="_blank">
                  <Button
                    onClick={() => {}}
                    className="rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                    text="加入 Discord">
                    <FontAwesomeIcon icon={faDiscord} className='mr-1 w-5' />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;