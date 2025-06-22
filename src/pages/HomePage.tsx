import type React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlides = [
  {
    title: '專業室內設計',
    subtitle: '創造理想居住空間',
    image: '/02.png'
  },
  {
    title: '商業空間設計',
    subtitle: '打造品牌形象空間',
    image: '/153.png'
  }
];

const FeaturedWorks = [
  {
    id: 1,
    title: '一心_大雄宅',
    slug: 'yixin-daxiong-house',
    image: '/02.png'
  },
  {
    id: 2,
    title: '九如_游家老宅翻修',
    slug: 'jiuru-you-house-renovation',
    image: '/119.png'
  }
];

// 文字動畫組件
const AnimatedText: React.FC<{ text: string; className?: string; delay?: number }> = ({
  text,
  className = "",
  delay = 0
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20
    }
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "8px" }}
          key={`animated-${word}-${word.length}-char${word.charCodeAt(0) || 65}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 逐字動畫組件
const TypewriterText: React.FC<{ text: string; className?: string; delay?: number }> = ({
  text,
  className = "",
  delay = 0
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay
      }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "inline-block" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`typewriter-char-${letter === " " ? "space" : letter}-pos${index}`}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HeroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HeroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HeroSlides.length) % HeroSlides.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          {HeroSlides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.title}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <AnimatedText
                        text={slide.title}
                        className="text-4xl md:text-6xl font-bold mb-4"
                        delay={0.5}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      <TypewriterText
                        text={slide.subtitle}
                        className="text-xl md:text-2xl"
                        delay={0}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {HeroSlides.map((slide, index) => (
            <button
              key={`slide-${slide.title}`}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-[#f9f9f8]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TypewriterText
              text="室內設計,就找迴森設計"
              className="text-2xl md:text-3xl font-medium text-[#2d2927]"
              delay={0.3}
            />
          </motion.div>
          <motion.div
            className="relative overflow-hidden bg-white py-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex whitespace-nowrap animate-marquee">
              <span className="text-lg text-[#8B4513] mx-8">高雄室內設計推薦</span>
              <span className="text-lg text-[#8B4513] mx-8">高雄室內設計</span>
              <span className="text-lg text-[#8B4513] mx-8">高雄商業空間設計</span>
              <span className="text-lg text-[#8B4513] mx-8">高雄室內設計推薦</span>
              <span className="text-lg text-[#8B4513] mx-8">高雄室內設計</span>
              <span className="text-lg text-[#8B4513] mx-8">高雄商業空間設計</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-left">
              <motion.h2
                className="text-2xl md:text-3xl font-light text-[#302b27] mb-4 tracking-wide"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="font-sans font-light">Works ― </span>
                <TypewriterText
                  text="案例分享"
                  className="font-serif font-light inline-block"
                  delay={0.5}
                />
              </motion.h2>
              <motion.div
                className="w-full h-0.5 bg-[#302b27] mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {FeaturedWorks.map((work, index) => (
              <motion.div
                key={work.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Link to={`/works/${work.slug}`} className="block">
                  <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <motion.h3
                        className="text-lg font-light text-[#302b27] mb-3 group-hover:text-[#866a57] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {work.title}
                      </motion.h3>
                      <motion.span
                        className="text-[#866a57] text-sm hover:text-[#302b27] transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        查看案例 &gt;
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/works"
              className="inline-flex items-center text-[#866a57] hover:text-[#302b27] transition-colors text-lg font-light"
            >
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                看更多案例 →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-left mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-light text-[#2d2927] mb-4 tracking-wide"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-sans font-light">About Us ― </span>
              <TypewriterText
                text="關於我們"
                className="font-serif font-light inline-block"
                delay={0.5}
              />
            </motion.h2>
            <motion.div
              className="w-full h-0.5 bg-[#2d2927] mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />
            <motion.h3
              className="text-2xl md:text-3xl font-light text-[#2d2927] mb-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <TypewriterText
                text="｜迴森設計｜"
                delay={0}
              />
            </motion.h3>
          </motion.div>

          <div className="text-center">
            <div className="max-w-4xl mx-auto -mt-4">
              <div className="space-y-4 mb-8">
                <motion.p
                  className="text-base text-[#9a9692] leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  「迴」是回家的方向，「森」是自然的語言。
                </motion.p>
                <motion.p
                  className="text-base text-[#9a9692] leading-relaxed"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  我們相信，家的樣貌不只一種，設計應該貼近每一位使用者的獨特生活方式。
                </motion.p>
                <motion.p
                  className="text-base text-[#9a9692] leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  迴森設計專注於室內居家空間，結合多元風格與人本思維，為每一個家庭打造專屬的生活場域，讓美感與功能並存，讓空間充滿情感與溫度。
                </motion.p>
              </div>

              <Link to="/about">
                <motion.div
                  className="inline-flex items-center bg-[#8B4513] text-white px-6 py-3 rounded-lg hover:bg-[#2d2927] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    了解更多 →
                  </motion.span>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Services Section */}
      <section id="services" className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-left mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-light text-[#2d2927] mb-4 tracking-wide"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-sans font-light">Hot Service ― </span>
              <TypewriterText
                text="熱門服務"
                className="font-serif font-light inline-block"
                delay={0.5}
              />
            </motion.h2>
            <motion.div
              className="w-full h-0.5 bg-[#2d2927] mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />
            <motion.p
              className="text-[#7f7069] text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              迴森提供最完整的服務，給您好品質。
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.3 }}
          >
            {[
              { title: '｜住宅室內設計｜', link: '/residential-design', image: '/119.png' },
              { title: '｜商業空間設計｜', link: '/commercial-design', image: '/132.png' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Link to={service.link} className="block">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <motion.h3
                        className="text-lg font-light text-[#2d2927] mb-3 group-hover:text-[#8B4513] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.span
                        className="text-[#8B4513] hover:text-[#2d2927] transition-colors text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        查看內容→
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
