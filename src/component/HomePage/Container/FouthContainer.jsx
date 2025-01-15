import { Link } from "react-router-dom";
import React from "react";
const FouthContainer = ({ imgScr, title, text }) => {
  return (
    <div className=" bg-[#0021db] flex flex-col mt-4 md:flex-row-reverse text-white">
      <div className="w-full flex justify-center items-center">
        <img src={imgScr} alt="container-img1 block" className="max-w-full" />
      </div>

      <div className=" w-full py-8 flex justify-center items-center flex-col text-wrap min-[425px]:py-10 text-center ">
        <h1 className=" font-bold text-3xl sm:text-6xl roboto-bold tracking-wide py-6">
          {title}
        </h1>
        <p className=" text-xl sm:text-2xl break-words roboto-regular px-5 md:px-[5rem] tracking-wider text-wrap text-center ">
          {text}
        </p>
        <Link to="SignIn">
          <button className="inline-btn roboto-regular text-base tracking-wider font-semibold hover-3s hover:bg-blue-900 border-white text-white mt-8">
            Order now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FouthContainer;
