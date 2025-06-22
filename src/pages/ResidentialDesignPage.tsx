import type React from 'react';
import { motion } from 'framer-motion';

const ResidentialDesignPage: React.FC = () => {
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
            Residential Design
          </h1>
          <p className="text-xl text-[#8B4513] mb-8">住宅室內設計</p>
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
              打造屬於您的理想家居
            </h2>
            <p className="text-[#666] leading-relaxed max-w-4xl mx-auto">
              每一個家都有其獨特的故事與生活方式。我們深入了解您的需求與喜好，
              結合美學與實用性，為您打造一個既美麗又功能完善的居住空間。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8f8f8] p-8 rounded-lg">
              <h3 className="text-2xl font-light text-[#2d2927] mb-4">
                設計理念
              </h3>
              <ul className="space-y-2 text-[#666]">
                <li>• 以人為本的設計思維</li>
                <li>• 空間機能性與美學平衡</li>
                <li>• 尊重居住者的生活習慣</li>
                <li>• 永續環保與健康居住</li>
              </ul>
            </div>
            <div className="bg-[#f8f8f8] p-8 rounded-lg">
              <h3 className="text-2xl font-light text-[#2d2927] mb-4">
                服務範圍
              </h3>
              <ul className="space-y-2 text-[#666]">
                <li>• 室內設計規劃</li>
                <li>• 傢具設計與配置</li>
                <li>• 燈光設計</li>
                <li>• 材質選擇與配色</li>
                <li>• 工程監管</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResidentialDesignPage;
