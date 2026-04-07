import React from 'react';
    import ContactHeroSection from '@/components/contact/ContactHeroSection';
    import ContactInfoSection from '@/components/contact/ContactInfoSection';
    import ContactFormSection from '@/components/contact/ContactFormSection';
    import FaqSection from '@/components/contact/FaqSection';
    import ContactCallToActionSection from '@/components/contact/ContactCallToActionSection';

    const ContactPage = () => {
      return (
        <div className="page-transition pt-24">
          <ContactHeroSection />
          <ContactInfoSection />
          <ContactFormSection />
          <FaqSection />
          <ContactCallToActionSection />
        </div>
      );
    };

    export default ContactPage;