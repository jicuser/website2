import React from 'react';

const JamatiaLogo = ({ className = '' }) => {
  return (
    <div className={`flex items-end ${className}`}>
      <div className="leading-none">
        <div className="font-serif text-[3.25rem] font-semibold italic leading-[.72] tracking-[-.055em] text-[#efc766] md:text-[3.7rem]">
          Jamatia
        </div>
        <div className="mt-2 whitespace-nowrap pl-1 text-[8px] font-semibold uppercase tracking-[.31em] text-white/70 md:text-[9px]">
          Jamatia Islamic Centre
        </div>
      </div>
    </div>
  );
};

export default JamatiaLogo;
