import React from 'react';
    import FaqCard from '@/components/contact/FaqCard';

    const faqItems = [
      { 
        question: 'What are your prayer times?', 
        answer: 'Prayer times vary throughout the year based on the Islamic calendar. Please visit our Prayer Times page for the most up-to-date schedule.' 
      },
      { 
        question: 'How can I enroll my child in the Madrassah?', 
        answer: 'To enroll your child in our Madrassah, please visit our centre during office hours or contact us via email at madrassah@jicmasjid.org. We will provide you with the registration form and information about fees and schedules.' 
      },
      { 
        question: 'Do you offer services in languages other than English?', 
        answer: 'Yes, we offer services in Arabic, Urdu, and Bengali. Friday sermons are delivered in English with key points repeated in Arabic.' 
      },
      { 
        question: 'Can non-Muslims visit the centre?', 
        answer: 'Absolutely! We welcome visitors of all faiths who are interested in learning about Islam or participating in our community events. Please contact us in advance for large groups.' 
      },
      { 
        question: 'How can I make a donation to the centre?', 
        answer: 'Donations can be made in person at the centre, via bank transfer, or through our website. For more information, please contact our administration office.' 
      },
      { 
        question: 'Do you perform marriage ceremonies?', 
        answer: 'Yes, our Imams perform Islamic marriage (Nikah) ceremonies. Please contact us at least 3 months in advance to discuss requirements and availability.' 
      }
    ];

    const FaqSection = () => (
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to commonly asked questions about Jamatia Islamic Centre.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <FaqCard key={index} {...faq} index={index} />
            ))}
          </div>
        </div>
      </section>
    );

    export default FaqSection;