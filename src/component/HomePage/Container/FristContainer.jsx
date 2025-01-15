import React from "react";
import { Link } from "react-router-dom";
const FristContainer = ({ imgScr, title, text }) => {
  return (
    <div className=" bg-[#c0e8a6] grid grid-rows-1 md:grid-cols-2">
      <div className="max-w-full flex justify-center items-center">
        <img src={imgScr} alt="container-img1 block" />
      </div>
      <div className="  max-w-full flex justify-center items-center flex-col text-wrap text-center  py-8 min-[425px]:py-10">
        <h1 className=" text-xl font-bold roboto-bold tracking-wide min-[425px]:text-2xl">
          {title}
        </h1>
        <p className=" text-base mt-10 roboto-regular px-8 m-4 min-[425px]:text-xl min-[425px]:px-8">
          {text}
        </p>
        <button className="inline-btn roboto-regular text-sm tracking-wider font-semibold hover-3s hover:bg-[#d6e1a4]">
          <Link to="SignIn"> Sign up here</Link>
        </button>
      </div>
    </div>
  );
};

export default FristContainer;
