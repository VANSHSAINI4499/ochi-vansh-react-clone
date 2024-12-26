import React from "react";

function Featured() {
  return (
    <div className="w-full  h-[300vh] ">
      <div className="w-full py-[20vh] border-b-[2px] pb-20 border-zinc-100">
        <h1 className="text-7xl  px-10 tracking-tight">Featured Projects</h1>
      </div>
      <div className="cards w-full flex gap-10 mt-10 px-10">
        <div className="cardcontainer relative w-1/2 h-[60vh]  ">
          <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl font-bold uppercase whitespace-nowrap">
            {"Cardboard Spaceship".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>

          <div className="w-full h-[60vh] rounded-3xl overflow-hidden">
            <img
              className="card w-full h-[60vh]"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt=""
            />
          </div>
        </div>
        <div className="cardcontainer w-1/2 h-[60vh] relative  ">
          <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-7xl font-bold uppercase whitespace-nowrap">
            {"AH2 & Matt Horn".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          
          <div className="card w-full h-[60vh] rounded-3xl overflow-hidden">
            <img
              className="card w-full h-[60vh]"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
