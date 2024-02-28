import React from "react";
import IMG from "../asserts/2.png";

const Content = () => {
  return (
    <div className="ml-56 max-2xl:mx-8">
      <div>
        <p className="mr-40 mt-4 text-sm font-semibold font-serif max-sm:mr-auto">
          C.R.I PUMPS WINS THE NATIONAL EMERGENCY CONSERVATION AWARD 2018 FOR
          THE 4TH TIME
        </p>

        <ul className=" mt-4" style={{ listStyleType: "square" }}>
          <li>
            C.R.I's energy efficient products are well recognized by various
            Government Institutions,as trustworthy products for various projects
            across the globe to save energy
          </li>
          <li className="mt-3">
            C.R.I is the highest contributor in the country for the projects of
            EESL(Energy Efficient Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
      </div>
      <div>
        <img src={IMG} alt="img" className=" w-11/12  mt-4 relative" />
      </div>
      <div className="mr-6">
        Government of India has awarded the
        <span className="font-bold">
          "National Energy Conservation Award 2018"
        </span>
        .Mr. G. Selveraj, joint Managing Director of C.R.I Group received the
        award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
        Singh, Honorable Minister of State
      </div>
    </div>
  );
};

export default Content;