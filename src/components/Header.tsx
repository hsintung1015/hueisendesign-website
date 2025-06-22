import type React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/home', label: '首頁' },
    { path: '/about', label: '關於我們' },
    { path: '/services', label: '服務項目' },
    { path: '/works', label: '案例分享' },
    { path: '/contact', label: '聯絡我們' },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#2d2927]">HUEI SEN DESIGN</h1>
              <p className="text-xs text-[#9a9692]">迴森設計有限公司</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-[#2d2927]">迴森設計</h1>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors font-medium relative ${
                  location.pathname === link.path
                    ? 'text-[#8B4513]'
                    : 'text-[#2d2927] hover:text-[#8B4513]'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8B4513]"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/1eFP31qwIA-MK1xzUSeU4sUamOeoPAqYVHgRQW8dJWTs/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-[#8B4513] hover:text-[#2d2927] transition-colors text-sm font-rounded"
            >
              <span>⭐GOOGLE表單</span>
            </a>
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2d2927]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2d2927]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#8B4513] bg-[#8B4513]/10'
                    : 'text-[#2d2927] hover:text-[#8B4513] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/1eFP31qwIA-MK1xzUSeU4sUamOeoPAqYVHgRQW8dJWTs/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-4 text-[#8B4513] hover:text-[#2d2927] transition-colors font-rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              ⭐GOOGLE表單
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
