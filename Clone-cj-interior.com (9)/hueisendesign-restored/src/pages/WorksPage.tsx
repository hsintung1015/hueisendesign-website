import type React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = ['全部'];

const works = [
  {
    id: 1,
    title: '一心_大雄宅',
    slug: 'yixin-daxiong-house',
    category: '住宅設計',
    image: '/02.png',
    description: '現代簡約風格的住宅設計，注重空間的流暢性與實用性，營造溫馨舒適的居家氛圍。',
    year: '2024',
    area: '40坪'
  },
  {
    id: 2,
    title: '九如_游家老宅翻修',
    slug: 'jiuru-you-house-renovation',
    category: '老屋翻新',
    image: '/119.png',
    description: '保留老屋原有韻味的同時，融入現代生活機能，創造新舊並存的美好空間。',
    year: '2024',
    area: '35坪'
  }
];

const WorksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredWorks = selectedCategory === '全部'
    ? works
    : works.filter(work => work.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative h-[40vh] overflow-hidden"
        style={{
          backgroundImage: 'url(/777.jpg)',
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
              className="text-4xl md:text-6xl font-light mb-2 tracking-wider overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {'WORKS'.split('').map((char, index) => (
                <motion.span
                  key={`works-en-${index}-${char}`}
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
              {'案例分享'.split('').map((char, index) => (
                <motion.span
                  key={`works-zh-${index}-${char}`}
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

      <div className="bg-white pt-20 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex gap-12">
          {/* Left Sidebar */}
          <motion.div
            className="flex-shrink-0 w-64"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Works Title */}
              <div>
                <h1 className="text-3xl font-light tracking-wide text-[#2d2927] mb-2">
                  Works |
                </h1>
                <div className="w-32 h-px bg-[#2d2927] mb-6" />
              </div>

              {/* Category Navigation */}
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  >
                    <button
                      onClick={() => {
                        if (category === '全部') {
                          window.location.reload();
                        } else {
                          setSelectedCategory(category);
                        }
                      }}
                      className={`text-lg font-light tracking-wide transition-colors cursor-pointer block text-left w-full ${
                        selectedCategory === category
                          ? 'text-[#8B4513]'
                          : 'text-[#2d2927] hover:text-[#8B4513]'
                      }`}
                    >
                      {category}
                    </button>
                    {category === '全部' && (
                      <motion.div
                        className="w-24 h-px bg-[#2d2927] mt-1"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content Grid */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/works/${work.slug}`}>
                    <div className="space-y-4">
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100">
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-light text-[#2d2927] group-hover:text-[#8B4513] transition-colors text-center">
                        {work.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
