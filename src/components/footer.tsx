import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="border-t-[1px] bg-white z-10">
      <div className="h-32 p-5 container mx-auto">
        <div className="flex justify-center">
          <AiFillGithub className="transition-all ease-in-out duration-150 h-[30px] w-[30px] mr-20 hover:cursor-pointer hover:scale-125" />
          <AiFillLinkedin className="transition-all ease-in-out duration-150 h-[30px] w-[30px] hover:cursor-pointer hover:scale-125" />
        </div>
        <div className="flex justify-center pt-4">
          <span className="r-text-s">{`${new Date().getFullYear()} - Yves Wetter -`}</span>
          <span className="r-text-s hover:cursor-pointer">{"Impressum"}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
