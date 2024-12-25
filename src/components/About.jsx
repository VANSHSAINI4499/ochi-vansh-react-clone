import React from "react";

function About() {
  return (
    <div className="w-full p-[10vh] bg-[#CDEA68] rounded-3xl text-black">
        <h1 className="text-[3vw] leading-[4vw] tracking-tight">Ochi is a strategic presentation agency for forward-thinking businesses
      that need to raise funds, sell products, explain complex ideas, and
      hire great people.</h1>
      <div className="w-full border-t-[0.5vh] mt-20 border-[#a1b562] pt-20 flex">
        <div className="w-1/2">
        <h1 className="text-7xl">Our approach:</h1>
        <button className="px-7 py-5 bg-zinc-900 mt-[5vh] text-white rounded-full uppercase flex items-center">Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full ml-[2vw]"></div>
        </button>
        
        </div>
        <div className="w-1/2 h-[65vh] "><img className="rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />

        </div>
        
         </div>
     
    </div>

  );
}

export default About;
