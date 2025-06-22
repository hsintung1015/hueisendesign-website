import type React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('載入中');
  const navigate = useNavigate();

  useEffect(() => {
    // 載入進度動畫
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // 載入完成後延遲跳轉到首頁
          setTimeout(() => navigate('/home'), 800);
          return 100;
        }
        return prev + 1.2;
      });
    }, 40);

    // 載入文字動畫
    const textTimer = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === '載入中...') return '載入中';
        if (prev === '載入中') return '載入中.';
        if (prev === '載入中.') return '載入中..';
        return '載入中...';
      });
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [navigate]);



  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative">

      {/* 主要內容 */}
      <div className="text-center relative z-10">
        {/* 品牌名稱 - 英文 */}
        <motion.h1
          className="text-3xl md:text-4xl font-light text-[#2d2927] mb-6 tracking-[0.3em]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {'HUEI SEN DESIGN'.split('').map((char, index) => (
            <motion.span
              key={`brand-${char === ' ' ? 'space' : char}-pos${index}-${char.charCodeAt(0) || 32}`}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.05,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* 品牌名稱 - 中文 */}
        <motion.h2
          className="text-base md:text-lg text-[#8B4513] mb-12 tracking-[0.4em] font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          迴森設計有限公司
        </motion.h2>

        {/* 載入進度條 */}
        <motion.div
          className="w-80 mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          {/* 進度條背景 */}
          <div className="h-0.5 bg-gray-300 mb-6">
            <motion.div
              className="h-full bg-[#8B4513]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* 載入文字 */}
          <motion.p
            className="text-sm text-[#7f7069] tracking-wide font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            {loadingText}
          </motion.p>
        </motion.div>
      </div>


    </div>
  );
};

export default LandingPage;
