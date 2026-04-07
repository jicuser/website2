import React from 'react';
    import { motion } from 'framer-motion';
    import HeroSection from '@/components/services/HeroSection';
    import ServiceCategoriesTabs from '@/components/services/ServiceCategoriesTabs';
    import SpecialServicesSection from '@/components/services/SpecialServicesSection';

    const ServicesPage = () => {
      return (
        <div className="page-transition pt-24">
          <HeroSection />
          <ServiceCategoriesTabs />
          <SpecialServicesSection />
        </div>
      );
    };

    export default ServicesPage;