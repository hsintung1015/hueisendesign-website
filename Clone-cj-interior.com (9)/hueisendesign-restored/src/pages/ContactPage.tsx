import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 橫幅照片 */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="/136.png"
          alt="聯絡我們橫幅"
          className="w-full h-full object-cover"
        />
        {/* 橫幅文字 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-wider"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            CONTACT US
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            聯絡我們
          </motion.p>
        </div>
      </div>

      {/* 介紹文字區塊 - 獨立灰色背景 */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="flex items-center justify-center mb-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4" />
              <p className="text-gray-700 text-xl">
                不論是居家空間還是商業場域，我們都能為您量身打造理想設計。
              </p>
            </motion.div>
            <motion.div
              className="flex items-center justify-center mb-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4" />
              <p className="text-gray-700 text-xl">
                歡迎提供您的需求，讓我們與您一同打造兼具美感與功能的空間
              </p>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4" />
              <p className="text-gray-700 text-xl">
                有任何需求都可以告訴我們，我們會盡快與您聯繫。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 白色間隔區域 */}
      <div className="bg-white py-8" />

      {/* 聯絡資訊區塊 - 白色背景 */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 聯絡電話 */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">聯絡電話</h3>
              <p className="text-gray-600 text-sm mb-3">歡迎來電諮詢</p>
              <p className="text-amber-800 font-medium text-lg">0973-020-967</p>
            </motion.div>

            {/* 營業時間 */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">營業時間</h3>
              <p className="text-gray-600 text-sm mb-3">週一至週五</p>
              <p className="text-amber-800 font-medium text-lg">9:00 ~ 18:00</p>
            </motion.div>

            {/* 公司地址 */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">公司地址</h3>
              <p className="text-gray-600 text-sm mb-3">歡迎預約參觀</p>
              <p className="text-amber-800 font-medium text-lg">高雄市鳳山區鳳山北街1號</p>
            </motion.div>

            {/* LINE官方 */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">LINE 官方</h3>
              <p className="text-gray-600 text-sm mb-3">線上即時諮詢</p>
              <p className="text-amber-800 font-medium text-lg">jmkang1010</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
