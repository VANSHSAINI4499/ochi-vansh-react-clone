import { motion } from 'motion/react';
import React from 'react';

function Marquee() {
    
  return (
    <div   className="relative w-full h-[40vh] bg-[#004D43] overflow-hidden flex items-center py-20 rounded-tl-3xl rounded-tr-3xl">
      
      <div className="absolute top-1 -translate-y-[calc(50%-2.5rem)] w-full h-[2px] bg-gray-300"></div>
      
      <div className="absolute bottom-[10%] w-full h-[2px] bg-gray-300"></div>


     
      <div className="flex whitespace-nowrap ">
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear" ,repeat:Infinity,duration:5}} className="text-[9vw] font-semibold uppercase text-white pr-20">We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear" ,repeat:Infinity,duration:5}} className="text-[9vw] font-semibold uppercase text-white pr-20 ">We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear" ,repeat:Infinity,duration:5}} className="text-[9vw] font-semibold uppercase text-white pr-20 ">We are ochi</motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
