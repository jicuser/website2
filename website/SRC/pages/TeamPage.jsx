import React from 'react';
    import { motion } from 'framer-motion';
    import { Wrench, Users, Info } from 'lucide-react';
    import { Card, CardContent } from '@/components/ui/card';
    import MosqueIcon from '@/components/icons/MosqueIcon';
    import { Link } from 'react-router-dom';

    const UnderConstructionHero = () => (
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-gray-800/50 dark:to-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Wrench className="h-24 w-24 text-primary mb-8 animate-pulse" />
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Meet Our Team - Page Under Construction
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              We're working hard to bring you detailed profiles of our dedicated team members. This section is currently being updated.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              Please check back soon for more information!
            </p>
          </motion.div>
        </div>
      </section>
    );

    const PlaceholderStaffCard = ({ name, role }) => (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="team-card transition-all duration-300 hover:shadow-xl"
      >
        <Card className="h-full overflow-hidden border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/30">
          <CardContent className="pt-8 pb-8 text-center flex flex-col items-center justify-center h-full">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <Users className="h-12 w-12 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-1">{name || 'Team Member'}</h3>
            <p className="text-primary font-medium mb-3">{role || 'Role Coming Soon'}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Profile information will be available shortly.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );

    const ComingSoonSection = () => {
      const placeholderStaff = [
        { name: 'Head Imam', role: 'Spiritual Leadership' },
        { name: 'Madrassah Director', role: 'Educational Programs' },
        { name: 'Program Coordinator', role: 'Community Services' },
        { name: 'Board Member', role: 'Governance & Strategy' },
        { name: 'Youth Mentor', role: 'Youth Development' },
        { name: 'Volunteer Staff', role: 'Support Services' },
      ];

      return (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Future Team Showcase
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We are excited to introduce the individuals who contribute to the Jamatia Islamic Centre. Here's a glimpse of what's to come.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {placeholderStaff.map((staff, index) => (
                <PlaceholderStaffCard key={index} name={staff.name} role={staff.role} />
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    const OurCommitmentSection = () => (
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-2xl p-8 md:p-12 text-center"
          >
            <MosqueIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Commitment to the Community
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Even as we update this page, please know that Jamatia Islamic Centre is powered by a team of passionate Imams, scholars, educators, volunteers, and board members. 
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Their collective dedication ensures we continue to provide spiritual guidance, educational programs, and vital community services. We are committed to fostering a welcoming and supportive environment for all.
            </p>
            <div className="flex items-center justify-center p-4 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary dark:text-primary-foreground">
              <Info className="h-6 w-6 mr-3 flex-shrink-0" />
              <p className="text-sm">
                For immediate inquiries about our team or services, please visit our <Link to="/contact" className="font-semibold underline hover:text-primary/80">Contact Page</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );

    const TeamPage = () => {
      return (
        <div className="page-transition pt-24">
          <UnderConstructionHero />
          <ComingSoonSection />
          <OurCommitmentSection />
        </div>
      );
    };

    export default TeamPage;