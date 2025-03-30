export interface SocialLinks {
    FB: string;
    IG: string;
    TG: string;
    Threads: string;
    Twitter: string;
    TikTok: string;
    Website: string;
}

export interface VerificationDetails {
    title: string;
    socialLinks: SocialLinks;
}

export interface VerificationData {
    code: string;
    type: string;
    person: string;
    details: VerificationDetails;
}

export const verificationData: VerificationData[] = [
    {
        "code": "C_TERSHI",
        "type": "個人帳號",
        "person": "CEO(夏特稀)",
        "details": {
            "title": "CEO兼共同創辦人：夏特稀",
            "socialLinks": {
                "FB": "https://www.facebook.com/TershiXia",
                "IG": "https://instagram.com/TershiXia",
                "TG": "http://t.me/TershiXia",
                "Threads": "https://www.threads.net/@tershixia",
                "Twitter": "https://x.com/TershiXia",
                "TikTok": "https://www.tiktok.com/@tsx526",
                "Website": "https://tershi.com"
            }
        }
    },
    {
        "code": "C_ZLU18f",
        "type": "個人帳號",
        "person": "CEO(來日)",
        "details": {
            "title": "CEO兼共同創辦人：來日",
            "socialLinks": {
                "FB": "無",
                "IG": "https://instagram.com/lu1.o.8",
                "TG": "無",
                "Threads": "https://www.threads.net/lu1.o.8",
                "Twitter": "無",
                "TikTok": "無",
                "Website": "無"
            }
        }
    },
    {
        "code": "C_GAGA",
        "type": "個人帳號",
        "person": "講師(呱田)",
        "details": {
            "title": "講師兼共同創辦人：呱田",
            "socialLinks": {
                "FB": "無",
                "IG": "https://instagram.com/gaga._.0.8",
                "TG": "無",
                "Threads": "https://www.threads.net/gaga._.0.8",
                "Twitter": "https://x.com/fanyu_1026",
                "TikTok": "無",
                "Website": "無"
            }
        }
    },
    {
        "code": "C_XIAOYONG",
        "type": "團隊助理",
        "person": "小永",
        "details": {
            "title": "團隊助理：小永",
            "socialLinks": {
                "FB": "無",
                "IG": "無",
                "TG": "無",
                "Threads": "無",
                "Twitter": "無",
                "TikTok": "無",
                "Website": "無"
            }
        }
    },
    {
        "code": "C_KIYI",
        "type": "講師",
        "person": "奇異果",
        "details": {
            "title": "講師：奇異果",
            "socialLinks": {
                "FB": "無",
                "IG": "https://instagram.com/kiwytrade",
                "TG": "無",
                "Threads": "https://www.threads.net/kiwytrade",
                "Twitter": "無",
                "TikTok": "無",
                "Website": "無"
            }
        }
    },
    {
        "code": "C_Y",
        "type": "講師",
        "person": "Y",
        "details": {
            "title": "講師：Y",
            "socialLinks": {
                "FB": "無",
                "IG": "https://instagram.com/wai_crypto",
                "TG": "無",
                "Threads": "https://www.threads.net/wai_crypto",
                "Twitter": "無",
                "TikTok": "無",
                "Website": "無"
            }
        }
    },
    {
        "code": "C_UNA",
        "type": "KOL",
        "person": "UNA",
        "details": {
            "title": "KOL：UNA",
            "socialLinks": {
                "FB": "無",
                "IG": "無",
                "TG": "無",
                "Threads": "無",
                "Twitter": "無",
                "TikTok": "無",
                "Website": "無"
            }
        }
    },
    {
        "code": "C_BAOGOU",
        "type": "KOL",
        "person": "寶狗",
        "details": {
            "title": "KOL：寶狗",
            "socialLinks": {
                "FB": "無",
                "IG": "無",
                "TG": "無",
                "Threads": "無",
                "Twitter": "無",
                "TikTok": "無",
                "Website": "無"
            }
        }
    }
]

