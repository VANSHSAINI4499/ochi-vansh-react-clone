import React from 'react';

function Marquee() {
  return (
    <div className="relative w-full h-[40vh] bg-[#004D43] gap-[5vw] overflow-hidden flex items-center py-20 rounded-tl-3xl rounded-tr-3xl">
      
      {/* Top line */}
      <div className="absolute top-10 transform -translate-y-1/2 w-full h-[2px] bg-gray-300"></div>
      
      {/* Bottom line */}
      <div className="absolute bottom-[10%] w-full h-[2px] bg-gray-300"></div>

      {/* Marquee Content */}
      <div className="flex whitespace-nowrap gap-[5vw] animate-marquee">
        <h1 className="text-[9vw] font-semibold uppercase text-white">We are ochi</h1>
        <h1 className="text-[9vw] font-semibold uppercase text-white">We are ochi</h1>
      </div>

      {/* Duplicate Content for Seamless Scrolling */}
      <div className="flex whitespace-nowrap gap-[5vw] animate-marquee">
        <h1 className="text-[9vw] font-semibold uppercase text-white">We are ochi</h1>
        <h1 className="text-[9vw] font-semibold uppercase text-white">We are ochi</h1>
      </div>
    </div>
  );
}

export default Marquee;
