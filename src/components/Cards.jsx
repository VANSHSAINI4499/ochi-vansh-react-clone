import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex gap-5 items-center px-12">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-lg w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 border-2 rounded-full left-10 bottom-7 border-[#CDEA68] text-[#CDEA68]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
        <div className="card relative w-1/2 h-full rounded-lg bg-[#212121] flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-3 uppercase py-1 border-2 rounded-full left-10 bottom-7">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative w-1/2 h-full rounded-lg bg-[#212121] flex items-center justify-center">
        <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-3 uppercase py-1 border-2 rounded-full left-10 bottom-7">
           Business bootcamp alumini
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
