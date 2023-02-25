import React from "react";
import logo_klein from "../public/logos/logo_klein.svg";

const Header = () => {
  return (
    <div className="shadow-lg">
      <div className="container mx-auto h-[80px] p-5 flex justify-between">
        <div className="flex">
          <img src={logo_klein} alt="logo" className="w-10 mr-5" />
          <h1 className="r-text-l">YVESWETTER.CH</h1>
        </div>
        <div>
          <p className="r-text-m">CONTACT</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
