import React from "react";
import { LOGO } from "../utils/constants";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-black via-black to-slate-900 p-2 md:p-4 flex justify-between">
      <img src={LOGO} alt="" className="h-8 md:h-16 p-2 mr-2 md:mx-4 ml-2" />
      <div className="flex gap-2 md:gap-4 text-white items-center text-xs md:text-base">
        <div>Contact Us</div>
        <div className="hidden md:inline-block">Privacy Policy</div>
        <div>Help</div>
        <div>Copyright &copy; 2024</div>
      </div>
    </div>
  );
};

export default Footer;
