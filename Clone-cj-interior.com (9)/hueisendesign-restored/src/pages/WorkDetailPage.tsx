import type React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const workDetails = {
  'yixin-daxiong-house': {
    title: '一心_大雄宅',
    images: ['/02.png', '/119.png', '/132.png', '/153.png', '/185.png', '/188.png', '/180.png', '/181.png'],
    description: '現代簡約風格的住宅設計，注重空間的流暢性與實用性，營造溫馨舒適的居家氛圍。',
    year: '2024',
    area: '40坪',
    type: '住宅設計'
  },
  'jiuru-you-house-renovation': {
    title: '九如_游家老宅翻修',
    images: ['/119.png', '/136.png', '/143.png', '/154.png', '/182.png', '/183.png', '/39.png', '/41.png'],
    description: '保留老屋原有韻味的同時，融入現代生活機能，創造新舊並存的美好空間。',
    year: '2024',
    area: '35坪',
    type: '老屋翻新'
  }
};

const WorkDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const work = slug ? workDetails[slug as keyof typeof workDetails] : null;

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-[#2d2927] mb-4">案例未找到</h1>
          <Link to="/works" className="text-[#8B4513] hover:underline">
            返回案例分享
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] overflow-hidden"
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
              className="text-5xl md:text-7xl font-light mb-2 tracking-wider overflow-hidden"
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

                {/* Navigation */}
                <div className="space-y-3">
                  <Link to="/works">
                    <button className="text-lg font-light tracking-wide text-[#2d2927] hover:text-[#8B4513] transition-colors cursor-pointer block text-left w-full">
                      全部
                    </button>
                    <div className="w-24 h-px bg-[#2d2927] mt-1" />
                  </Link>

                  <div className="mt-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-[#2d2927] rounded-full" />
                      <Link
                        to="/works"
                        className="text-base font-light text-[#2d2927] hover:text-[#8B4513] transition-colors"
                      >
                        返回列表
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Project Title */}
              <div className="mb-8">
                <motion.h2
                  className="text-4xl font-light text-[#2d2927] mb-4 tracking-wide"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {work.title}
                </motion.h2>
                <motion.div
                  className="w-full h-1 bg-[#8B4513]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>



              {/* Main Image */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-gray-100">
                  <img
                    src={work.images[0]}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Additional Images */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >

                {work.images.slice(1).map((image, index) => (
                  <motion.div
                    key={`${work.title}-image-${index}`}
                    className="relative overflow-hidden rounded-lg aspect-[16/10] bg-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={image}
                      alt={`${work.title} - ${index + 2}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Extended line and Back to list at bottom */}
          <motion.div
            className="container mx-auto px-4 max-w-7xl mt-12 pb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
          >
            <div className="w-full h-px bg-gray-400 mb-4" />
            <Link
              to="/works"
              className="text-[#2d2927] hover:text-[#8B4513] transition-colors font-light text-sm"
            >
              &lt; Back to list
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
