import React from 'react';
    import ContactInfoCard from '@/components/contact/ContactInfoCard';
    import { MapPin, Phone, Clock } from 'lucide-react';

    const contactInfoItems = [
      { 
        icon: <MapPin className="h-10 w-10 text-primary" />, 
        title: 'Our Location', 
        details: ['179-183 Woodlands Rd', 'Birmingham B11 4ER'] 
      },
      { 
        icon: <Phone className="h-10 w-10 text-primary" />, 
        title: 'Phone Number', 
        details: ['0121 778 6612'] 
      },
      { 
        icon: <Clock className="h-10 w-10 text-primary" />, 
        title: 'Opening Hours', 
        details: ['Open 24 hours'] 
      }
    ];

    const ContactInfoSection = () => (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfoItems.map((item, index) => (
              <ContactInfoCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
    );

    export default ContactInfoSection;