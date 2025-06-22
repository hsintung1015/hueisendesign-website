import type React from 'react';
import { motion } from 'framer-motion';

// 文字動畫組件 - 逐字顯示
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
        staggerChildren: 0.03,
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
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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

// 段落動畫組件
const AnimatedParagraph: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'left' | 'right' | 'up' }> = ({
  children,
  delay = 0,
  direction = 'up'
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { x: -50, y: 0 };
      case 'right': return { x: 50, y: 0 };
      case 'up': return { x: 0, y: 30 };
      default: return { x: 0, y: 30 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative h-[40vh] overflow-hidden"
        style={{
          backgroundImage: 'url(/888.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wider">
              ABOUT US
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium tracking-wide">
              關於我們
            </h2>
          </div>
        </div>
      </section>

      <div className="bg-[#f9f9f8] pt-20 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Content Section */}
          <div className="text-center mb-20">
            {/* 品牌標題動畫 */}
            <motion.h1
              className="text-2xl md:text-3xl font-light text-black mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <TypewriterText
                text="｜迴森設計｜"
                delay={0.3}
              />
            </motion.h1>

            <div className="max-w-4xl mx-auto space-y-8 text-base text-[#2d2927] leading-relaxed mb-12">
              {/* 第一段 - 品牌含義 */}
              <AnimatedParagraph delay={0.2}>
                <p className="text-center">
                  <span className="text-[#8B4513] font-medium">「迴」</span>
                  是回家的方向，
                  <span className="text-[#8B4513] font-medium">「森」</span>
                  是自然的語言。
                </p>
              </AnimatedParagraph>

              {/* 第二段 - 設計理念 */}
              <AnimatedParagraph delay={0.4}>
                <p className="text-center">
                  我們相信，家的樣貌不只一種，設計應該貼近每一位使用者的獨特生活方式。
                </p>
              </AnimatedParagraph>

              {/* 第三段 - 品牌使命 */}
              <AnimatedParagraph delay={0.6}>
                <div className="text-center space-y-2">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    迴森設計專注於室內居家空間，
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    結合多元風格與人本思維，為每一個家庭打造專屬的生活場域，
                  </motion.p>
                  <motion.p
                    className="text-[#8B4513] font-medium"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    讓美感與功能並存，讓空間充滿情感與溫度。
                  </motion.p>
                </div>
              </AnimatedParagraph>
            </div>

            {/* Core Values Section */}
            <div className="mb-16">
              <motion.h2
                className="text-xl md:text-2xl font-light text-black mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <TypewriterText
                  text="核心價值（Core Values）"
                  delay={0.2}
                />
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {[
                    { title: "1. 生活導向：", content: "設計源於生活，回歸居住者最實際的日常需求。" },
                    { title: "2. 多元融合：", content: "從現代簡約到復古、北歐、東方禪意⋯我們擅長整合多種風格，創造獨一無二的空間語彙。" },
                    { title: "3. 自然共生：", content: "重視光、材、器的搭配，讓室內與自然相和呼應。" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="text-base"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <span className="text-[#8B4513] font-medium text-base">{item.title}</span>
                      <span className="text-[#2d2927] text-base">{item.content}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {[
                    { title: "4. 細膩為本：", content: "從使用者的角度出發，讓每個細節都有存在的價值。" },
                    { title: "5. 永續設計：", content: "以長久視角選材料，為居住者營造環境永續的綠共同努力。" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="text-base"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <span className="text-[#8B4513] font-medium text-base">{item.title}</span>
                      <span className="text-[#2d2927] text-base">{item.content}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Mission Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-xl md:text-2xl font-light text-black mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TypewriterText
                  text="我們的使命（Mission）"
                  delay={0.3}
                />
              </motion.h2>
              <motion.p
                className="text-sm md:text-base text-[#2d2927] leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                致力於為不同階段、不同生活型態的家庭，創造富有靈魂與溫度的居家空間，讓每一次的設計，不只是改變空間，更豐富人們對生活的想像。
              </motion.p>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="text-xl md:text-2xl font-light text-black mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <TypewriterText
                  text="我們的願景（Vision）"
                  delay={0.4}
                />
              </motion.h2>
              <motion.p
                className="text-sm md:text-base text-[#2d2927] leading-relaxed max-w-4xl mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                成為代表「生活質感」與「設計美學性」的居家空間創造者，用設計為每一位居住者營造理想中的家
              </motion.p>

              <motion.div
                className="w-full h-px bg-gray-300 mb-12"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ transformOrigin: "left" }}
              />

              {/* Services Image & Text Section */}
              <div className="space-y-16 max-w-6xl mx-auto">
                {/* Residential Design - Image Left, Text Right */}
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="relative -ml-12"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <img
                      src="/143.png"
                      alt="室內設計"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </motion.div>
                  <motion.div
                    className="pl-24 text-left mt-16"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.h3
                      className="text-xl md:text-2xl font-light text-black mb-6 text-left"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <TypewriterText
                        text="｜室內設計｜"
                        delay={0}
                      />
                    </motion.h3>
                    <div className="space-y-4 text-[#2d2927] leading-relaxed text-left">
                      {[
                        "一盞燈，一面窗，一處靜謐角落，",
                        "是你專屬的日常儀式感。",
                        "室內設計，不只是空間改造，",
                        "更是生活風格的提案。"
                      ].map((text, index) => (
                        <motion.p
                          key={`residential-text-${text.slice(0, 5)}-${index}`}
                          className="text-left text-sm md:text-base"
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                        >
                          {text}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Divider Line */}
                <motion.div
                  className="w-full h-px bg-gray-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ transformOrigin: "center" }}
                />

                {/* Commercial Design - Text Left, Image Right */}
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="lg:order-1 pr-2 text-left mt-16"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.h3
                      className="text-xl md:text-2xl font-light text-black mb-6 text-left"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <TypewriterText
                        text="｜商業空間設計｜"
                        delay={0}
                      />
                    </motion.h3>
                    <div className="space-y-4 text-[#2d2927] leading-relaxed text-left">
                      {[
                        "空間不只是營業，更是品牌的敘事方式。",
                        "迴森設計以人本觀點檯造主的風象，打造美麗、舒適、有記憶點的商業空間。",
                        "讓顧客看見你、走進你、記住你。"
                      ].map((text, index) => (
                        <motion.p
                          key={`commercial-text-${text.slice(0, 5)}-${index}`}
                          className="text-left text-sm md:text-base"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        >
                          {text}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    className="lg:order-2 relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <img
                      src="/154_(1).png"
                      alt="商業空間設計"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
