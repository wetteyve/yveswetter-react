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
          <h1 className="r-text-l">YVESWETTER.CH</h1>
        </div>
        <div className="my-auto hover:cursor-pointer">
          <p className="r-text-m">CONTACT</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
