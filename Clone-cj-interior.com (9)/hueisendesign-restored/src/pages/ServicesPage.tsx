import type React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: '住宅室內設計',
      image: '/119.png',
      link: '/residential-design'
    },
    {
      title: '商業空間設計',
      image: '/132.png',
      link: '/commercial-design'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative h-[40vh] overflow-hidden"
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
        {/* 左邊 SORT 標題和右邊服務項目橫幅 */}
        <div className="flex items-center gap-0 mb-12">
          {/* 左邊 SORT 區塊 */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-[#2d2927] tracking-wide mb-2">
              SORT |
            </h1>
            <div className="w-32 h-px bg-[#2d2927]" />
          </motion.div>

          {/* 右邊服務項目橫幅 */}
          <motion.div
            className="bg-black text-white py-4 rounded-t-lg"
            style={{ width: '58%', marginLeft: '5rem' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wide ml-8">
              服務項目｜
            </h2>
          </motion.div>
        </div>

        {/* 服務卡片 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20"
          style={{ marginLeft: '13rem', maxWidth: '50%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link to={service.link} className="block">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-light text-[#2d2927] mb-4 tracking-wide">
                    ｜{service.title}｜
                  </h3>

                  <motion.div
                    className="text-[#8B4513] text-sm font-light tracking-wide hover:text-[#2d2927] transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    詳細資訊 →
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
