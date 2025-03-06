import IntroCard from "@/components/Card/IntroCard";
import List from "@/components/List/CheckedList";
import H2 from "@/components/Title/H2";
import Head from "next/head";
import SEO from "@/config/SEO.json";

const exchange = () => {
  return (
    <>
      <Head>
        <title>{SEO.Exchange.title}</title>
        <meta name="description" content={SEO.Exchange.description} />
        <meta property="og:title" content={SEO.Exchange.title} />
        <meta property="og:description" content={SEO.Exchange.description} />
        <meta property="og:image" content={SEO.Exchange.image} />
        {/* <meta property="og:url" content={`https://yourdomain.com/post/${post.frontMatter.id}`} /> */}
        <meta property="og:type" content={SEO.Exchange.type} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content={SEO.Exchange.title} />
        <meta name="twitter:description" content={SEO.Exchange.description} />
        <meta name="twitter:image" content={SEO.Exchange.image} />
      </Head>
      <section className="p-5 sm:pt-10 sm:px-10 sm:pb-20">
        <H2 className="text-center" title="逐日合作的交易所" />
        <p className="text-base text-center text-body dark:text-body-dark">提供市場最低手續費減免反傭</p>
        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 "> { /* xl:grid-cols-3 */}
          <IntroCard
            title="Bitunix - 合約交易所（推薦）"
            img="/background/bitunix.webp"
            link="https://sunary.tw/bitunix"
            type={{
              name: "合約交易所",
              bgColor: "bg-web-green",
            }}
          >
            <IntroCard.Description>
              <List text="全球衍生品交易量Top20交易所" />
              <List text="US/CA/PH MSB合規牌照及Cobo安全託管" />
              <List text="2023杜拜未來區塊鏈峰會黃金贊助商" />
              <List text="八折手續費減免" />
            </IntroCard.Description>
            <IntroCard.Footer
              data={[
                {
                  title: "專屬邀請碼",
                  description: "runsun2025",
                  link: "https://sunary.tw/bitunix",
                },
                {
                  title: "手續費減免",
                  description: "20%/20%",
                  link: "https://sunary.tw/bitunix",
                }
              ]}
            />
          </IntroCard>
          <IntroCard
            title="XT - 合約交易所（推薦）"
            img="https://cdn.sunary.tw/xt_exchange.png"
            link="https://sunary.tw/xt"
            type={{
              name: "合約交易所",
              bgColor: "bg-web-green",
            }}
          >
            <IntroCard.Description>
              <List text="全球衍生品交易量Top10交易所" />
              <List text="一個平台，滿足你所有投資需求" />
              <List text="多種交易產品，助你靈活應對市場波動" />
              <List text="八折手續費減免" />
            </IntroCard.Description>
            <IntroCard.Footer
              data={[
                {
                  title: "專屬邀請碼",
                  description: "SUNARY",
                  link: "https://sunary.tw/xt",
                },
                {
                  title: "手續費減免",
                  description: "20%/20%",
                  link: "https://sunary.tw/xt",
                }
              ]}
            />
          </IntroCard>
        </div>
      </section>
    </>
  );
}

export default exchange;