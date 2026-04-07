import React from 'react';
import { motion } from 'framer-motion';
import FinancialChart from '@/components/financials/FinancialChart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DollarSign, TrendingUp, TrendingDown, CalendarDays } from 'lucide-react';

const parseKValue = (value) => {
  if (typeof value === 'string' && value.toLowerCase().includes('k')) {
    return parseFloat(value.replace('k', '')) * 1000;
  }
  return parseFloat(value);
};

const parseDateString = (dateStr) => {
  const parts = dateStr.split('/');
  // Ensure DD/MM/YYYY is parsed correctly as MM/DD/YYYY for Date constructor
  return new Date(`${parts[1]}/${parts[0]}/${parts[2]}`);
};


const rawFinancialData = [
  { yearEndDate: "31/03/2020", totalGrossIncome: "218.59k", totalExpenditure: "239.82k" },
  { yearEndDate: "31/03/2021", totalGrossIncome: "199.44k", totalExpenditure: "148.80k" },
  { yearEndDate: "31/03/2022", totalGrossIncome: "330.34k", totalExpenditure: "210.01k" },
  { yearEndDate: "31/03/2023", totalGrossIncome: "371.94k", totalExpenditure: "238.75k" },
  { yearEndDate: "31/03/2024", totalGrossIncome: "545.03k", totalExpenditure: "241.52k" },
];

const financialData = rawFinancialData.map(item => ({
  yearEndDate: parseDateString(item.yearEndDate).toISOString().split('T')[0], // Store as YYYY-MM-DD
  totalGrossIncome: parseKValue(item.totalGrossIncome),
  totalExpenditure: parseKValue(item.totalExpenditure),
})).sort((a, b) => new Date(a.yearEndDate) - new Date(b.yearEndDate)); // Ensure data is sorted by date for the chart


const formatCurrency = (value) => `£${value.toLocaleString()}`;
const formatDate = (dateString) => {
  // Date is already YYYY-MM-DD, so new Date() will parse it correctly
  return new Date(dateString).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
};

const FinancialHistoryPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    in: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="page-transition container mx-auto px-4 py-8 md:py-12"
    >
      <header className="mb-12 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Financial History
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          An overview of Jamatia Islamic Centre's income and expenditure over the past years.
        </motion.p>
      </header>

      <section className="mb-12">
        <FinancialChart data={financialData} />
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
          Annual Financial Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financialData.map((item, index) => (
            <motion.div
              key={item.yearEndDate}
              variants={cardVariants}
              initial="initial"
              animate="in"
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-primary">
                      Year Ending {new Date(item.yearEndDate).getFullYear()}
                    </CardTitle>
                    <CalendarDays className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                  </div>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(item.yearEndDate)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/30 rounded-md">
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Income:</span>
                    </div>
                    <span className="font-semibold text-green-700 dark:text-green-300">{formatCurrency(item.totalGrossIncome)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/30 rounded-md">
                    <div className="flex items-center">
                      <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Expenditure:</span>
                    </div>
                    <span className="font-semibold text-red-700 dark:text-red-300">{formatCurrency(item.totalExpenditure)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                     <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Net Balance:</span>
                    </div>
                    <span className={`font-semibold ${item.totalGrossIncome - item.totalExpenditure >= 0 ? 'text-blue-700 dark:text-blue-300' : 'text-red-700 dark:text-red-300'}`}>
                      {formatCurrency(item.totalGrossIncome - item.totalExpenditure)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default FinancialHistoryPage;