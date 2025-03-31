import { verificationData, type VerificationData } from "@/config/verification";

function normalizeSocialLink(link: string): string {
    return link.toLowerCase()
        .replace(/^https?:\/\/(www\.)?/, '')
        .replace(/\/$/, '');
}

function searchBySocialLinks(input: string): VerificationData | null {
    const normalizedInput = normalizeSocialLink(input);
    
    for (const accounts of Object.values(verificationData)) {
        for (const account of accounts) {
            const { socialLinks } = account.details;
            
            for (const [platform, link] of Object.entries(socialLinks)) {
                if (link && link !== "無") {
                    const normalizedLink = normalizeSocialLink(link);
                    
                    // Check full URL match
                    if (normalizedLink === normalizedInput) {
                        return account;
                    }
                    
                    // Check username match (after last slash or @)
                    const inputUsername = normalizedInput.split(/[\/\@]/).pop() || '';
                    const linkUsername = normalizedLink.split(/[\/\@]/).pop() || '';
                    
                    if (inputUsername && inputUsername === linkUsername) {
                        return account;
                    }
                }
            }
        }
    }
    return null;
}

export function searchAccount(input: string): VerificationData | null {
    // First try direct code lookup
    const upperCode = input.toUpperCase();
    const accounts = verificationData[upperCode];
    
    if (accounts && accounts.length > 0) {
        return accounts[0];
    }
    
    // If no direct match, try social media links
    return searchBySocialLinks(input);
}
