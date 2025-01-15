import React from "react";
import { Link } from "react-router-dom";

const FiveContainer = ({ imgScr, title, text }) => {
  return (
    <div className=" bg-[#97d8b1] grid grid-rows-1 md:grid-cols-2 mt-4">
      <div className="max-w-full flex justify-center items-center">
        <img src={imgScr} alt="container-img1 block" />
      </div>
      <div className=" max-w-full flex justify-center items-center flex-col text-wrap text-center px-2 py-8 min-[425px]:py-10">
        <h1 className="text-xl font-bold roboto-bold tracking-wider min-[425px]:text-2xl">
          {title}
        </h1>
        <p className="text-base mt-10 mb-4 roboto-regular px-1 min-[425px]:text-xl sm:px-16 md:m-5">
          {text}
        </p>

        <Link to="SignIn">
          <button className="inline-btn roboto-regular text-sm tracking-wider font-semibold hover-3s hover:bg-green-200 ">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FiveContainer;
