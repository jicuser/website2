import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const MainLayout = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#06101c]">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow !pt-[184px] lg:!pt-[140px]">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
