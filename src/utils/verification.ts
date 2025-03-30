import { type VerificationData, verificationData } from "@/data/verification";

// 輔助函數：提取域名
export const extractDomain = (url: string): string => {
  try {
    const { hostname } = new URL(url);
    const parts = hostname.split(".");
    const mainDomain = parts.slice(-2).join(".");
    return mainDomain.toLowerCase();
  } catch {
    return url.toLowerCase();
  }
};

// 輔助函數：處理社交媒體 ID
export const normalizeId = (id: string): string => {
  return id.toLowerCase().replace(/^@/, '').trim();
};

// 社交媒體平台的 ID 提取規則
export const socialMediaPatterns = {
  FB: (url: string) => normalizeId(url.split('/').pop() || ''),
  IG: (url: string) => normalizeId(url.split('/').pop() || ''),
  TG: (url: string) => normalizeId(url.split('/').pop() || ''),
  Threads: (url: string) => normalizeId(url.split('@').pop() || ''),
  Twitter: (url: string) => normalizeId(url.split('/').pop() || ''),
  TikTok: (url: string) => normalizeId(url.split('@').pop() || ''),
  Website: (url: string) => extractDomain(url),
};

// 搜尋函數
export const searchAccount = (query: string): VerificationData | undefined => {
  const normalizedQuery = normalizeId(query);

  return verificationData.find((account) => {
    if (account.code.toLowerCase() === normalizedQuery) return true;

    const links = account.details.socialLinks;
    return Object.entries(links).some(([platform, link]) => {
      if (!link || link === "無") return false;

      if (platform === "Website") {
        const queryDomain = extractDomain(normalizedQuery);
        const linkDomain = extractDomain(link);
        return queryDomain === linkDomain;
      }

      const pattern = socialMediaPatterns[platform as keyof typeof socialMediaPatterns];
      if (pattern) {
        const extractedId = pattern(link);
        return extractedId === normalizedQuery;
      }

      return false;
    });
  });
};
