import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { AlertCircle, Target, CheckCircle, Phone } from 'lucide-react';

    const ProjectsPage = () => {
      const targetAmount = 74250;

      const equipment = [
        { name: '3 Body Freezers', cost: 8790, icon: <AlertCircle className="w-6 h-6 text-primary" /> },
        { name: 'Ghusal Table', cost: 7600, icon: <AlertCircle className="w-6 h-6 text-primary" /> },
        { name: 'Body Lift', cost: 3180, icon: <AlertCircle className="w-6 h-6 text-primary" /> },
        { name: 'Body Hoist', cost: 3680, icon: <AlertCircle className="w-6 h-6 text-primary" /> },
        { name: 'Hearse & PVT Ambulance', cost: 25000, icon: <AlertCircle className="w-6 h-6 text-primary" /> },
        { name: 'Building Work', cost: 26000, icon: <AlertCircle className="w-6 h-6 text-primary" /> },
      ];

      return (
        <div className="page-transition pt-24">
          <section className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="absolute inset-0 islamic-pattern opacity-5 z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Funeral Service Appeal
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Help us establish Birmingham's first not-for-profit funeral service, providing a vital, dignified service for our community in times of need.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold">Our Goal</CardTitle>
                      <CardDescription>
                        We are raising funds to acquire essential equipment for a community-focused funeral service.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                      >
                        <div className="bg-primary/10 p-6 rounded-lg text-center">
                          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Appeal Target
                          </p>
                          <p className="text-4xl font-bold text-primary">
                            £{targetAmount.toLocaleString()}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Equipment Needed</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {equipment.map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                              >
                                <Card className="bg-gray-50 dark:bg-gray-800 h-full">
                                  <CardContent className="pt-6 flex items-start space-x-4">
                                    {item.icon}
                                    <div>
                                      <p className="font-semibold text-lg text-gray-900 dark:text-white">{item.name}</p>
                                      <p className="text-primary font-bold text-xl">£{item.cost.toLocaleString()}</p>
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Card className="bg-primary/10 border-primary/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="w-6 h-6 text-primary" />
                          How to Donate
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Your contribution, no matter the size, makes a difference. To donate, please contact the Masjid directly.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Kindly mention you learned about this appeal from the website.
                        </p>
                        <Button asChild className="w-full mt-6">
                          <Link to="/contact">Contact the Masjid</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="w-6 h-6 text-primary" />
                          Our Vision
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 dark:text-gray-300">Provide a compassionate and affordable funeral service.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 dark:text-gray-300">Uphold Islamic traditions with dignity and respect.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 dark:text-gray-300">Support families during their most difficult times.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-background pb-16 md:pb-24">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto"
              >
                <img
                  src="https://storage.googleapis.com/hostinger-horizons-assets-prod/6d6be6eb-ad37-41f6-b510-19ea41b9028a/58a3215da96feff6bb9f6dea8bf5890e.jpg"
                  alt="Funeral Service Appeal Details Poster"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default ProjectsPage;