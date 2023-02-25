import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="border-t-[1px]">
      <div className="h-32 p-5 container mx-auto">
        <div className="flex justify-center">
          <AiFillGithub className="h-[30px] w-[30px] mr-12" />
          <AiFillLinkedin className="h-[30px] w-[30px]" />
        </div>
        <div className="flex justify-center pt-4">
          <p className="r-text-s">{`${new Date().getFullYear()} - Yves Wetter - Impressum`}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
