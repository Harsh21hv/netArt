import React from "react";
import Fb from "../asserts/facebook.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center max-lg:px-6 max-lg:text-xs">
        <p className="font-extrabold font-serif text-sm">
          C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
      </div>
      <div className="w-screen h-32 bg-red-500 mb-5 mt-3 flex justify-evenly max-lg:text-xs">
        <div className="text-white font-serif max-lg:text-xs h-fit my-auto">
          <div className="flex max-sm:block max-md:text-[10px]">
            <div className="max-lg:text-xs pr-[2px] w-fit">📞</div>
            <div className="pr-1 w-fit">Toll Free</div>
            <div className="font-semibold w-fit">1800 200 1234</div>
          </div>
        </div>
        <div className="flex my-auto">
          <img src={Fb} alt="img" className="w-10 max-lg:w-6" />
          <p className="text-white pr-6 font-serif my-auto max-md:text-[10px]">
            www.facebook.com/cripumps
          </p>
        </div>
        <div className="text-white my-auto font-serif flex">
          <span className="text-4xl max-lg:text-lg">🌐</span>
          <div className="h-fit my-auto max-md:text-[10px]">www.crigroups.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;