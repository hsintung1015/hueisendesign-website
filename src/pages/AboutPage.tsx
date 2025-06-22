import type React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
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
            About Us
          </h1>
          <p className="text-xl text-[#8B4513] mb-8">關於我們</p>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl font-light text-[#2d2927] mb-6">
              迴森設計有限公司
            </h2>
            <div className="space-y-4 text-[#666] leading-relaxed">
              <p>
                「迴」是回家的方向，「森」是自然的語言。
                我們相信，家的樣貌不只一種，設計應該貼近每一位使用者的獨特生活方式。
              </p>
              <p>
                迴森設計專注於室內居家空間，結合多元風格與人本思維，
                為每一個家庭打造專屬的生活場域，讓美感與功能並存，讓空間充滿情感與溫度。
              </p>
            </div>
          </div>
          <div className="bg-[#f8f8f8] p-8 rounded-lg">
            <h3 className="text-2xl font-light text-[#2d2927] mb-4">
              我們的服務
            </h3>
            <ul className="space-y-2 text-[#666]">
              <li>• 住宅室內設計</li>
              <li>• 商業空間設計</li>
              <li>• 空間規劃與動線配置</li>
              <li>• 傢具與軟件配置</li>
              <li>• 工程監管與協調</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-light text-[#2d2927] mb-6">
            聯絡我們
          </h3>
          <p className="text-[#666] mb-8">
            歡迎與我們討論您的設計需求，讓我們一起打造理想的生活空間。
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <p className="text-[#8B4513] font-medium">電話</p>
              <p className="text-[#666]">0973-020-967</p>
            </div>
            <div className="text-center">
              <p className="text-[#8B4513] font-medium">地址</p>
              <p className="text-[#666]">高雄市鳳山區崗山北街1號</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
