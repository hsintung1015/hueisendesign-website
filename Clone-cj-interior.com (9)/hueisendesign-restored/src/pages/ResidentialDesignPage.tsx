import type React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResidentialDesignPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] overflow-hidden"
        style={{
          backgroundImage: 'url(/666.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h1
              className="text-5xl md:text-7xl font-light mb-2 tracking-wider overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {'SERVICES'.split('').map((char, index) => (
                <motion.span
                  key={`services-en-${index}-${char}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.08,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl font-medium tracking-wide overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              {'服務項目'.split('').map((char, index) => (
                <motion.span
                  key={`services-zh-${index}-${char}`}
                  className="inline-block"
                  initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    delay: 1.2 + index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 150
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
          </div>
        </motion.div>
      </section>

      <div className="bg-[#f5f5f5] pt-20 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
        {/* 左邊 SORT 標題和右邊麵包屑導航 */}
        <div className="flex items-start gap-0 mb-12">
          {/* 左邊 SORT 區塊 */}
          <motion.div
            className="flex-shrink-0 mr-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-px bg-[#2d2927] mb-2" />
            <h1 className="text-4xl font-bold text-[#2d2927] tracking-wide mb-2">
              SORT |
            </h1>
            <Link to="/services" className="text-sm text-[#2d2927] tracking-wide mb-2 hover:text-[#8B4513] transition-colors cursor-pointer">
              所有服務項目
            </Link>
            <div className="w-32 h-px bg-[#2d2927]" />
          </motion.div>

          {/* 右邊麵包屑導航 */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-black text-white py-3 px-8 mb-8 rounded-t-lg" style={{ marginLeft: '5rem' }}>
              <nav className="text-sm font-light tracking-wide">
                <Link to="/" className="hover:underline">首頁</Link>
                <span className="mx-2">/</span>
                <Link to="/services" className="hover:underline">服務項目</Link>
                <span className="mx-2">/</span>
                <span>住宅室內設計</span>
              </nav>
            </div>
          </motion.div>
        </div>

        {/* 主要內容區域 */}
        <div className="flex gap-12 items-center" style={{ marginLeft: '15rem', marginTop: '-3rem' }}>
          {/* 左邊圖片 */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/119.png"
              alt="住宅室內設計"
              className="w-96 h-80 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* 右邊內容 */}
          <motion.div
            className="flex-1 text-center"
            style={{ marginLeft: '-15rem' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-light text-[#2d2927] mb-8 tracking-wide">
              住宅室內設計
            </h2>

            <Link to="/contact">
              <motion.button
                className="bg-black text-white px-8 py-3 font-light tracking-wide hover:bg-[#2d2927] transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                立即諮詢專人
              </motion.button>
            </Link>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialDesignPage;
