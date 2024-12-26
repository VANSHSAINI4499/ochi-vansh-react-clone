import React from "react";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900 p-16">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[5vw] uppercase leading-none -mb-4">Eye-</h1>
          <h1 className="text-[5vw] uppercase leading-none -mb-4">Opening</h1>
        </div>
        <img className="w-[10vh]" src={logo} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-[5vw] uppercase font-semibold leading-none -mb-4">
          Presentations
        </h1>
        <div className="details mt-20">
          <div className="category mb-5 text-2xl">S:</div>
          {["Facebook", "Instagram", "Behance", "LinkedIn"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline block text-xl"
              >
                {item}
              </a>
            )
          )}
        </div>
        <div className="flex justify-between mt-10">
          <div className="left w-1/2">
            <div className="category mb-5 mt-5 text-2xl">L:</div>
            <div className="flex flex-col space-y-2 hover:underline">
              {[
                "202-1965 W 4th Ave",
                "Vancouver, Canada",
                "30 Chukarina St",
                "Lviv, Ukraine",
              ].map((item, index) => (
                <a key={index} href="#" className="text-xl">
                  {item}
                </a>
              ))}
            </div>
            <div className="category mb-5 mt-5 text-2xl">E:</div>
            <a href="#" className="hover:underline text-xl">
              hello@ochi.design
            </a>
          </div>
          <div className="right flex justify-end w-full">
            <div className="details ">
              <div className="category mb-5 mt-5 text-2xl">M:</div>
              {[
                "Home",
                "Service",
                "Our Work",
                "About us",
                "Insights",
                "Contact us",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:underline block text-xl"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
