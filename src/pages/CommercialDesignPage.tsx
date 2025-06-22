import type React from 'react';
import { motion } from 'framer-motion';

const CommercialDesignPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-[#2d2927] mb-6">
            Commercial Design
          </h1>
          <p className="text-xl text-[#8B4513] mb-8">商業空間設計</p>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto" />
        </motion.div>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-light text-[#2d2927] mb-6">
              打造有力的品牌空間
            </h2>
            <p className="text-[#666] leading-relaxed max-w-4xl mx-auto">
              商業空間不僅是功能性的場所，更是品牌傳達與客戶體驗的重要媒介。
              我們專精於創造獨特的商業環境，提升品牌形象與客戶滿意度。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8f8f8] p-8 rounded-lg">
              <h3 className="text-2xl font-light text-[#2d2927] mb-4">
                設計理念
              </h3>
              <ul className="space-y-2 text-[#666]">
                <li>• 品牌識別與形象建立</li>
                <li>• 使用者體驗優化</li>
                <li>• 空間效率與流線規劃</li>
                <li>• 永續經營考量</li>
              </ul>
            </div>
            <div className="bg-[#f8f8f8] p-8 rounded-lg">
              <h3 className="text-2xl font-light text-[#2d2927] mb-4">
                服務範圍
              </h3>
              <ul className="space-y-2 text-[#666]">
                <li>• 辦公空間設計</li>
                <li>• 餐飲空間設計</li>
                <li>• 零售空間設計</li>
                <li>• 展示空間設計</li>
                <li>• 工程管理與協調</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommercialDesignPage;
