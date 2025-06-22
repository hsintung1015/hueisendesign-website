import type React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: '住宅室內設計',
      description: '為您的家庭打造溫馨與功能並存的居住空間',
      image: '/119.png',
      link: '/residential-design'
    },
    {
      title: '商業空間設計',
      description: '為您的事業打造專業與品牌形象的商業空間',
      image: '/132.png',
      link: '/commercial-design'
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
            Services
          </h1>
          <p className="text-xl text-[#8B4513] mb-8">服務項目</p>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Link to={service.link}>
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light text-[#2d2927] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-[#8B4513] hover:text-[#2d2927] transition-colors font-medium">
                    了解更多 →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-light text-[#2d2927] mb-6">
            需要設計服務嗎？
          </h3>
          <p className="text-[#666] mb-8">
            歡迎與我們聯絡，讓我們為您打造理想的空間。
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-lg hover:bg-[#2d2927] transition-colors font-medium"
          >
            聯絡我們
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
