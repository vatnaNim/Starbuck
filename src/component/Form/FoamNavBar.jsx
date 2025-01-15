import React from "react";
import { Link } from "react-router-dom";
import logo from "../HomePage/navbar/logoP.jpg";
const FoamNavBar = () => {
  return (
    <div className="flex py-4 sm:px-8 px-4 shadow-md">
      <Link to="/">
        <img src={logo} alt="back Logo" className="w-12 sm:w-16" />
      </Link>
    </div>
  );
};

export default FoamNavBar;
