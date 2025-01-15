import { Link } from "react-router-dom";
import React from "react";
const SecondContainer = ({ imgScr, title, text }) => {
  return (
    <div className=" bg-[#006241] flex flex-col mt-4 md:flex-row-reverse text-white">
      <div className="w-full flex justify-center items-center">
        <img src={imgScr} alt="container-img1" className="max-w-full" />
      </div>

      <div className=" w-full py-8 flex justify-center items-center flex-col text-wrap min-[425px]:py-10 ">
        <h1 className=" text-xl font-bold roboto-bold tracking-wide min-[425px]:text-2xl py-6">
          {title}
        </h1>
        <p className=" text-base break-words roboto-regular px-5 md:px-[5rem] tracking-wider text-wrap text-center min-[425px]:text-xl">
          {text}
        </p>
        <Link to="Signup">
          <button className="inline-btn roboto-regular text-base tracking-wider font-semibold hover-3s hover:bg-[#096e26] border-white text-white mt-8">
            Get the app
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SecondContainer;
