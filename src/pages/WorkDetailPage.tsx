import type React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const WorkDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // 模擬作品數據
  const work = {
    title: '一心_大雄宅',
    category: '住宅設計',
    description: '這是一個充滿溫馨與現代感的住宅設計案例。',
    images: ['/02.png', '/119.png'],
    details: [
      '坐落地點：高雄市',
      '室內坪數：35坪',
      '設計風格：現代簡約',
      '完工時間：2024年'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#8B4513] text-sm mb-2 block">{work.category}</span>
          <h1 className="text-4xl md:text-5xl font-light text-[#2d2927] mb-4">
            {work.title}
          </h1>
          <p className="text-[#666] text-lg leading-relaxed">
            {work.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            {work.images.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={image}
                  alt={`${work.title} - ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#f8f8f8] p-6 rounded-lg">
              <h3 className="text-2xl font-light text-[#2d2927] mb-4">
                案例詳情
              </h3>
              <ul className="space-y-2">
                {work.details.map((detail, index) => (
                  <li key={index} className="text-[#666]">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f8f8f8] p-6 rounded-lg">
              <h3 className="text-2xl font-light text-[#2d2927] mb-4">
                設計特色
              </h3>
              <p className="text-[#666] leading-relaxed">
                此案例結合了現代簡約與溫馨的家居感，透過精心的格局規劃與材質選擇，
                打造出一個既美觀又實用的居住空間。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
