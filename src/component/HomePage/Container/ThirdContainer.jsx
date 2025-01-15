import { Link } from "react-router-dom";
import React from "react";
const ThirdContainer = ({ imgScr, title, text }) => {
  return (
    <div className=" bg-[#d3eae2] grid grid-rows-1 md:grid-cols-2 mt-4">
      <div className="max-w-full flex justify-center items-center">
        <img src={imgScr} alt="container-img3" />
      </div>
      <div className="  max-w-full flex justify-center items-center flex-col text-wrap text-center px-2 py-8 min-[425px]:py-10">
        <h1 className="roboto-bold leading-8 sm:text-3xl text-2xl">{title}</h1>
        <p className=" text-base mt-10 roboto-regular px-8 m-4 min-[425px]:text-xl min-[425px]:px-8 tracking-wide font-semibold">
          {text}
        </p>
        <button className="inline-btn roboto-regular text-sm tracking-wider font-semibold hover-3s hover:bg-zinc-300">
          <Link to="SignIn">Learn more</Link>
        </button>
      </div>
    </div>
  );
};

export default ThirdContainer;
