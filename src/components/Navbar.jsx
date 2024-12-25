import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="fixed z-[900] w-full px-20 py-8 flex justify-between items-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights","Contact"].map((item, index) => (
          <a href="#" key={index} className={`text-lg capitalized font-light ${index===4 &&"ml-32"}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
