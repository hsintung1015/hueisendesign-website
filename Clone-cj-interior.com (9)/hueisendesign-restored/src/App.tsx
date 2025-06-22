import type React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorksPage from './pages/WorksPage';
import ContactPage from './pages/ContactPage';
import ResidentialDesignPage from './pages/ResidentialDesignPage';
import CommercialDesignPage from './pages/CommercialDesignPage';
import WorkDetailPage from './pages/WorkDetailPage';

// 布局組件
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:slug" element={<WorkDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/residential-design" element={<ResidentialDesignPage />} />
          <Route path="/commercial-design" element={<CommercialDesignPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
