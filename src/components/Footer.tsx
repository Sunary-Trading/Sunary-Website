import React from 'react';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#DA9060]/90 to-[#DA9060] text-white py-6 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#DA9060]/50 to-transparent opacity-50" />
      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold">聯絡我們</h3>
            <p className="text-sm">Email: example@domain.com</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold">快速連結</h3>
            <ul>
              <li><a href="#" className="text-sm text-white hover:underline">隱私政策</a></li>
              <li><a href="#" className="text-sm text-white hover:underline">使用條款</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">追蹤我們</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">
          <p>&copy; 2025 你的網站名稱. 版權所有.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
