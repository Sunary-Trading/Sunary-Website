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
        <title>{SEO.NotFound.title}</title>
        <meta name="description" content={SEO.NotFound.description} />
        <meta property="og:title" content={SEO.NotFound.title} />
        <meta property="og:description" content={SEO.NotFound.description} />
        <meta property="og:image" content={SEO.NotFound.image} />
        {/* <meta property="og:url" content={`https://yourdomain.com/post/${post.frontMatter.id}`} /> */}
        <meta property="og:type" content={SEO.NotFound.type} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content={SEO.NotFound.title} />
        <meta name="twitter:description" content={SEO.NotFound.description} />
        <meta name="twitter:image" content={SEO.NotFound.image} />
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;