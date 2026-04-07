import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent } from '@/components/ui/card';
    import { Book, Users, Calendar, Clock, Heart, BookOpen, Loader2 } from 'lucide-react';
    import MosqueIcon from '@/components/icons/MosqueIcon';
    import { usePrayerTimes } from '@/components/prayer-times/PrayerTimesLogic';

    const HomePage = () => {
      const { todaysTimes, isLoadingPrayerTimes } = usePrayerTimes();

      const prayerTimesPreviewData = [
        { name: 'Fajr', dbKeyBegins: 'fajr', dbKeyJamaah: 'jamaah_fajr' },
        { name: 'Dhuhr', dbKeyBegins: 'dhuhr', dbKeyJamaah: 'jamaah_dhuhr' },
        { name: 'Asr', dbKeyBegins: 'asr', dbKeyJamaah: 'jamaah_asr' },
        { name: 'Maghrib', dbKeyBegins: 'maghrib', dbKeyJamaah: 'jamaah_maghrib' },
        { name: 'Isha', dbKeyBegins: 'isha', dbKeyJamaah: 'jamaah_isha' }
      ];

      return (
        <div className="page-transition">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gray-50 dark:bg-gray-800">
            <div className="absolute inset-0 islamic-pattern opacity-5 z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                      Welcome to <span className="text-primary">Jamatia Islamic Centre</span>
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                      A place of worship, learning, and community service dedicated to spreading the message of peace and harmony.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg">
                        <Link to="/prayer-times">Prayer Times</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative rounded-lg overflow-hidden shadow-xl"
                  >
                    <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/6d6be6eb-ad37-41f6-b510-19ea41b9028a/a36d60015d1eb1f64588a36222584b66.png" alt="Jamatia Islamic Centre building exterior" className="w-full h-auto rounded-lg object-cover aspect-[16/9]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Prayer Times Preview */}
          <section className="py-16 bg-white dark:bg-gray-900"> {/* Changed from bg-gray-50 to white for contrast */}
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Today's Prayer Times</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Join us for prayers at the following times. Check our prayer times page for the full schedule.
                </p>
              </div>
              
              {isLoadingPrayerTimes ? (
                <div className="flex justify-center items-center h-32">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
              ) : todaysTimes ? (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                  {prayerTimesPreviewData.map((prayer, index) => (
                    <motion.div
                      key={prayer.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="text-center hover:shadow-lg transition-shadow h-full bg-gray-50 dark:bg-gray-800">
                        <CardContent className="pt-6 flex flex-col justify-between h-full">
                          <div>
                            <h3 className="font-bold text-lg mb-1">{prayer.name}</h3>
                            <p className="text-primary text-xl font-semibold">
                              {todaysTimes[prayer.dbKeyBegins] || 'N/A'}
                            </p>
                          </div>
                          {todaysTimes[prayer.dbKeyJamaah] && todaysTimes[prayer.dbKeyJamaah] !== 'N/A' && (
                            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                              <p>Jama'ah: {todaysTimes[prayer.dbKeyJamaah]}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Today's prayer times are not available. Please check the full schedule or contact us.
                </p>
              )}
              
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/prayer-times">View Full Schedule</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We offer a range of services to meet the spiritual, educational, and community needs of Muslims.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    icon: <MosqueIcon className="h-10 w-10 text-primary" />, 
                    title: 'Daily Prayers', 
                    description: 'Five daily prayers in congregation led by our qualified Imams.' 
                  },
                  { 
                    icon: <Book className="h-10 w-10 text-primary" />, 
                    title: 'Quran Classes', 
                    description: 'Learn to read and understand the Holy Quran with proper tajweed.' 
                  },
                  { 
                    icon: <Users className="h-10 w-10 text-primary" />, 
                    title: 'Community Events', 
                    description: 'Regular gatherings, celebrations, and community activities.' 
                  },
                  { 
                    icon: <Calendar className="h-10 w-10 text-primary" />, 
                    title: 'Friday Sermons', 
                    description: 'Inspiring Jummah khutbahs addressing contemporary issues.' 
                  },
                  { 
                    icon: <BookOpen className="h-10 w-10 text-primary" />, 
                    title: 'Islamic Education', 
                    description: 'Comprehensive Islamic studies for children and adults.' 
                  },
                  { 
                    icon: <Heart className="h-10 w-10 text-primary" />, 
                    title: 'Charity Work', 
                    description: 'Supporting those in need through various charitable initiatives.' 
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all">
                      <CardContent className="pt-6 flex flex-col items-center text-center">
                        <div className="mb-4 p-3 rounded-full bg-primary/10">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Button asChild>
                  <Link to="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="py-16 bg-white dark:bg-gray-900"> {/* Changed from bg-gray-50 to white for contrast */}
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Events</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Join us for these special events and activities at Jamatia Islamic Centre.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: 'Friday Sermon',
                    date: 'Every Friday, 1:00 PM',
                    description: 'Weekly Jummah prayer and sermon by our Imam.'
                  },
                  {
                    title: 'Quran Study Circle',
                    date: 'Wednesdays, 7:30 PM',
                    description: 'Deep dive into Quranic verses and their meanings.'
                  },
                  {
                    title: 'Community Iftar',
                    date: 'During Ramadan',
                    description: 'Join us for breaking fast together during the holy month.'
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all border-t-4 border-t-primary bg-gray-50 dark:bg-gray-800">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-4">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Become a part of our growing community. Everyone is welcome to join our prayers and activities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-primary">
                    <Link to="/madrassah">Join Madrassah</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default HomePage;