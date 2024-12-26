import { motion } from "motion/react";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure px-20 mt-40">
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center overflow-hidden">
              {[
                index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7.7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1],duration:1.5 }}
                    key={`${index}-highlight`} // Added a key here
                    className="mr-[0.7vw] w-[7.7vw] rounded-md h-[4.51vw] bg-red-500"
                  ></motion.div>
                ),
              ]}
              <h1 className="uppercase leading-[5.8vw] tracking-tighter text-[6vw] font-medium">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For Public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index} // Added a key here
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full uppercase text-sm">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
