"use client";
import { useState } from "react";
import {
  ShieldCheck,
  KeyFill,
  QrCode,
  CheckCircleFill,
  ExclamationTriangleFill,
  LockFill,
  ShieldLockFill,
  Info,
} from "react-bootstrap-icons";
import { AnimatePresence, motion } from "framer-motion";
import { type VerificationDetails as Details } from "@/data/verification";
import { searchAccount } from "@/utils/verification";

// Modal 組件
const DetailModal = ({
  isOpen,
  onClose,
  details,
}: {
  isOpen: boolean;
  onClose: () => void;
  details: Details | null;
}) => {
  return (
    <AnimatePresence>
      {isOpen && details && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-[#DA9060] mb-4">
              {details.title}
            </h2>
            <div className="space-y-2">
              {Object.entries(details.socialLinks).map(
                ([platform, link]) =>
                  link && (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-3 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      {platform}: {link}
                    </a>
                  )
              )}
            </div>
            <button
              onClick={onClose}
              className="mt-4 w-full py-2 bg-[#DA9060] hover:bg-[#c27c4f] rounded-md transition-colors"
            >
              關閉
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Verification() {
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState<Details | null>(null);

  const handleVerify = (code: string) => {
    if (code.trim() === "") {
      setMessage("請輸入驗證碼");
      setStatus("error");
      return;
    }

    const verifiedAccount = searchAccount(code);

    if (verifiedAccount) {
      setMessage(`這是 ${verifiedAccount.person} 的 ${verifiedAccount.type}。`);
      setStatus("success");
    } else {
      setMessage("請確認驗證碼或社交媒體帳號是否正確。");
      setStatus("error");
    }
  };

  return (
    <div className="text-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#DA9060] flex items-center justify-center">
              <ShieldCheck className="me-2" /> 官方帳戶驗證
            </h1>
          </div>

          {/* 驗證表單 */}
          <div className="w-full max-w-[600px] p-6 rounded-lg shadow-lg border border-gray-700">
            <div>
              <label
                htmlFor="verification-code"
                className="text-sm font-medium text-gray-300 mb-1 flex items-center"
              >
                <KeyFill className="me-2 text-[#DA9060]" /> 請輸入驗證碼
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="verification-code"
                  className="w-full px-4 py-2 ps-9 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA9060] focus:border-transparent text-white placeholder-gray-400"
                  value={verificationCode}
                  onChange={(e) => {
                    setVerificationCode(e.target.value);
                    handleVerify(e.target.value); // 即時驗證
                  }}
                  placeholder="輸入驗證碼或社交媒體帳號"
                />
                <QrCode className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* 回傳訊息顯示區域 */}
            {message && (
              <>
                {status === "success" ? (
                  <div className="mt-4 p-4 px-6 rounded-lg flex items-center bg-green-900/30 max-w-full">
                    <CheckCircleFill className="me-5 scale-[2] text-green-400" />
                    <div className="flex flex-col justify-start items-start flex-grow">
                      <div className="font-medium text-green-400">驗證成功</div>
                      <p className="text-green-300 opacity-90 break-words max-w-[88%] text-start">
                        {message}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const account = searchAccount(verificationCode);
                        if (account?.details) {
                          setSelectedDetails(account.details);
                          setIsModalOpen(true);
                        }
                      }}
                      className="px-3 py-1 h-8 bg-[#DA9060] hover:bg-[#c27c4f] rounded-md text-sm flex items-center justify-center whitespace-nowrap"
                    >
                      <Info className="mr-2" /> 查看詳細
                    </button>
                  </div>
                ) : (
                  <div className="mt-4 p-4 px-6 rounded-lg flex items-center bg-red-900/30 max-w-full">
                    <ExclamationTriangleFill className="me-5 scale-[2] text-red-400" />
                    <div className="flex flex-col justify-start items-start">
                      <div className="font-medium text-red-400">驗證失敗</div>
                      <p className="text-red-300 opacity-90 break-words max-w-full">
                        {message}
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* 底部資訊區 */}
          <div className="mt-12 flex flex-col items-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#DA9060] to-transparent mb-6"></div>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center px-3 py-2 rounded-md bg-gray-800/50 border border-gray-700">
                <LockFill className="me-2 text-[#DA9060]" />
                <span>支持官方</span>
              </div>
              <div className="flex items-center px-3 py-2 rounded-md bg-gray-800/50 border border-gray-700">
                <ShieldLockFill className="me-2 text-[#DA9060]" />
                <span>安全使用</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        details={selectedDetails}
      />
    </div>
  );
}
