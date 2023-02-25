import React from "react";
import logo_klein from "../assets/logos/logo_klein.svg";

const Header = () => {
  return (
    <div className="shadow-lg">
      <div className="container mx-auto h-[80px] p-5 flex justify-between">
        <div className="flex">
          <img
            src={logo_klein}
            alt="logo"
            className="w-10 mr-5 hover:cursor-pointer"
          />
          <h1 className="r-text-l font-semibold">Yves Wetter</h1>
        </div>
        <div className="my-auto hover:cursor-pointer">
          <p className="r-text-l font-semibold transition-all ease-in duration-150 hover:scale-105">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
