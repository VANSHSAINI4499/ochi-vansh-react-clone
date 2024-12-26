import { Power4 } from "gsap/all";
import { motion } from "motion/react";
import React, { useState } from "react";

function Featured() {
  const [hoveredCard, setHoveredCard] = useState(null); // Track the hovered card

  return (
    <div className="w-full h-[250vh]"> {/* Increased height to accommodate new cards */}
      <div className="w-full py-[20vh] border-b-[2px] pb-20 border-zinc-100">
        <h1 className="text-7xl px-10 tracking-tight">Featured Projects</h1>
      </div>
      <div className="cards w-full flex gap-10 mt-10 px-10">
        {/* First Card */}
        <motion.div
          onMouseEnter={() => setHoveredCard("card1")}
          onMouseLeave={() => setHoveredCard(null)}
          className="cardcontainer relative w-1/2 h-[60vh]"
        >
          <h1 className="absolute flex text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl font-bold overflow-hidden uppercase whitespace-nowrap">
            {"Cardboard Spaceship".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={hoveredCard === "card1" ? { y: "0%" } : { y: "100%" }}
                transition={{
                  ease: Power4.easeInOut,
                  delay: index * 0.01,
                }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-[60vh] rounded-3xl overflow-hidden">
            <img
              className="card w-full h-[60vh]"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt=""
            />
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          onMouseEnter={() => setHoveredCard("card2")}
          onMouseLeave={() => setHoveredCard(null)}
          className="cardcontainer relative w-1/2 h-[60vh]"
        >
          <h1 className="absolute flex text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl font-bold overflow-hidden uppercase whitespace-nowrap">
            {"AH2 & Matt Horn".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={hoveredCard === "card2" ? { y: "0%" } : { y: "100%" }}
                transition={{
                  ease: Power4.easeInOut,
                  delay: index * 0.01,
                }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[60vh] rounded-3xl overflow-hidden">
            <img
              className="card w-full h-[60vh]"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>

      {/* Add two more cards below */}
      <div className="cards w-full flex gap-10 mt-10 px-10">
        {/* Third Card */}
        <motion.div
          onMouseEnter={() => setHoveredCard("card3")}
          onMouseLeave={() => setHoveredCard(null)}
          className="cardcontainer relative w-1/2 h-[60vh]"
        >
          <h1 className="absolute flex text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl font-bold overflow-hidden uppercase whitespace-nowrap">
            {"Fyde".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={hoveredCard === "card3" ? { y: "0%" } : { y: "100%" }}
                transition={{
                  ease: Power4.easeInOut,
                  delay: index * 0.01,
                }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-[60vh] rounded-3xl overflow-hidden">
            <img
              className="card w-full h-[60vh]"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </motion.div>

        {/* Fourth Card */}
        <motion.div
          onMouseEnter={() => setHoveredCard("card4")}
          onMouseLeave={() => setHoveredCard(null)}
          className="cardcontainer relative w-1/2 h-[60vh]"
        >
          <h1 className="absolute flex text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl font-bold overflow-hidden uppercase whitespace-nowrap">
            {"Vise".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={hoveredCard === "card4" ? { y: "0%" } : { y: "100%" }}
                transition={{
                  ease: Power4.easeInOut,
                  delay: index * 0.01,
                }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-[60vh] rounded-3xl overflow-hidden">
            <img
              className="card w-full h-[60vh]"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>



      </div>
      <div className="cards w-full flex gap-10 mt-10 px-10">
        {/* Third Card */}
        <motion.div
          onMouseEnter={() => setHoveredCard("card5")}
          onMouseLeave={() => setHoveredCard(null)}
          className="cardcontainer relative w-1/2 h-[60vh]"
        >
          <h1 className="absolute flex text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl font-bold overflow-hidden uppercase whitespace-nowrap">
            {"Trawa".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={hoveredCard === "card5" ? { y: "0%" } : { y: "100%" }}
                transition={{
                  ease: Power4.easeInOut,
                  delay: index * 0.01,
                }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-[60vh] rounded-3xl overflow-hidden">
            <img
              className="card w-full h-[60vh]"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>

        {/* Fourth Card */}
        <motion.div
          onMouseEnter={() => setHoveredCard("card6")}
          onMouseLeave={() => setHoveredCard(null)}
          className="cardcontainer relative w-1/2 h-[60vh]"
        >
          <h1 className="absolute flex text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl font-bold overflow-hidden uppercase whitespace-nowrap">
            {"Premium Blend".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={hoveredCard === "card6" ? { y: "0%" } : { y: "100%" }}
                transition={{
                  ease: Power4.easeInOut,
                  delay: index * 0.01,
                }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-[60vh] rounded-3xl overflow-hidden">
            <img
              className="card w-full h-[60vh]"
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              alt=""
            />
          </div>
        </motion.div>


        
      </div>
    </div>
  );
}

export default Featured;
