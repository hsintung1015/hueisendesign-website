import type React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const quickLinks = [
    { path: '/about', label: '關於我們' },
    { path: '/services', label: '服務項目' },
    { path: '/works', label: '案例分享' },
  ];

  return (
    <footer id="contact" className="bg-[#2d2927] text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-2">HUEI SEN DESIGN</h3>
            <p className="text-gray-300 text-sm mb-4">迴森設計有限公司</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              設計不是風格，是一種理解空間的方式。<br />
              迴森設計，用設計說故事，讓空間有靈魂。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h4 className="font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#8B4513] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="font-semibold mb-4">聯絡資訊</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <div className="mt-1">
                  <svg className="w-4 h-4 text-[#8B4513]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>高雄市鳳山區崗山北街1號</p>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg className="w-4 h-4 text-[#8B4513]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a
                  href="tel:0973020967"
                  className="hover:text-white transition-colors hover:underline"
                >
                  0973-020-967
                </a>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://line.me/ti/p/wJSInZGn7b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded text-sm font-bold hover:bg-green-600 transition-colors flex items-center space-x-1 font-rounded"
                >
                  <span>Line</span>
                </a>
                <a
                  href="https://docs.google.com/forms/d/1eFP31qwIA-MK1xzUSeU4sUamOeoPAqYVHgRQW8dJWTs/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1 text-sm font-bold font-rounded"
                >
                  <span>⭐ Google 表單</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>HUEISEN ©迴森設計有限公司｜2025 WEB DESIGN</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
