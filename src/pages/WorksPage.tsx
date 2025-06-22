import type React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WorksPage: React.FC = () => {
  const works = [
    {
      id: 1,
      title: '一心_大雄宅',
      slug: 'yixin-daxiong-house',
      image: '/02.png',
      category: '住宅設計'
    },
    {
      id: 2,
      title: '九如_游家老宅翻修',
      slug: 'jiuru-you-house-renovation',
      image: '/119.png',
      category: '住宅設計'
    }
  ];

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
            Works
          </h1>
          <p className="text-xl text-[#8B4513] mb-8">案例分享</p>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/works/${work.slug}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#8B4513] text-white px-3 py-1 rounded-full text-sm">
                      {work.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-[#2d2927] mb-2">
                    {work.title}
                  </h3>
                  <span className="text-[#8B4513] hover:text-[#2d2927] transition-colors text-sm">
                    查看詳情 →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorksPage;
