import React from 'react';

const JamatiaLogo = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-primary text-6xl md:text-7xl font-bold font-serif mr-1 md:mr-2 shrink-0 self-end leading-none pb-0.5">
        J
      </span>
      <div className="flex flex-col justify-center">
        <div className="inline-block"> 
          <span className="text-primary text-3xl md:text-4xl font-semibold font-serif leading-tight">
            amatia
          </span>
        </div>
        <span 
          className="text-gray-900 dark:text-gray-200 text-xs md:text-sm font-medium leading-tight block text-center whitespace-nowrap"
          style={{ letterSpacing: '0.1em' }} 
        >
          ISLAMIC CENTRE
        </span>
      </div>
    </div>
  );
};

export default JamatiaLogo;