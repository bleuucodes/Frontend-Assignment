import React from "react";
import UserIcon from "../assets/user.png";
import Arrow from "../assets/arrow.png";
import Category from "../assets/category.png";
import Share from "../assets/share.png";
import Section1 from "../assets/section1.png";
import Section2 from "../assets/section2.png";
import Mode from "../assets/mode.png";

const Sidebar = () => {
  return (
    <div className="border-r-2  border-[#80819158] flex flex-col justify-between">
      <div className="m-7 ">
        <div className="flex items-center">
          <img className="w-8 h-8 " src={UserIcon} alt="user icon" />
          <h1 className="font-poppins font-semibold text-xl mx-2">Name</h1>
          <img className="h-5 w-7 ml-14" src={Arrow} alt="Arrow" />
        </div>

        <div className="text-[#808191] font-medium text-md">
          <ul>
            <li className="flex items-center my-6 ">
              <img src={Category} className="mr-6 h-5 w-5" />
              Home
            </li>

            <li className="flex items-center my-6">
              <img src={Section1} className="mr-6 h-5 w-5" />
              Section 1
            </li>

            <li className="flex items-center my-6">
              <img src={Section2} className="mr-6 h-5 w-5" />
              Section 2
            </li>

            <li className="flex items-center my-6">
              <img src={Share} className="mr-6 h-5 w-5" />
              Section 8
            </li>

            <li className="flex items-center my-6">
              <img src={Share} className="mr-6 h-5 w-5" />
              Section 8
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div className="flex text-sm m-7">
          <button className="flex items-center bg-[#353945] px-2 rounded-xl mr-2">
            <img className="w-6 h-6 mr-2 " src={UserIcon} alt="user icon" />
            $0.90
          </button>
          <button className="flex items-center bg-[#A3E3FF] text-[#3772FF] font-semibold px-2 py-2 rounded-xl">
            Buy $XYZ
          </button>
        </div>

        <img className="w-24 h-8 ml-8" src={Mode} alt="modes icon" />
      </div>
    </div>
  );
};

export default Sidebar;
