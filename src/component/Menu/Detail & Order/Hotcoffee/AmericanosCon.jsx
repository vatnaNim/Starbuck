import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import Customize from "../Customize";
import { GiFallingStar } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import Including from "./Including";

const AmericanosCon = () => {
  const [isOrder, setIsOrder] = useState(true);
  function handleBtn() {
    setIsOrder(!isOrder);
  }
  return (
    <article className="w-full ">
      <div className="max-w-full grid grid-rows-1 md:grid-cols-2 py-12 bg-[#1e3932] ">
        <article className="sm:max-w-full max-w-full flex justify-center items-center">
          <img
            className="sm:w-64 w-60"
            src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg?impolicy=1by1_wide_topcrop_630"
            alt="image product"
          />
        </article>

        <article className="flex flex-col max-w-full md:max-w-96 text-center md:text-start  justify-center p-4">
          <h1 className="lg:text-4xl sm:text-3xl text-[1.4rem] text-wrap roboto-bold text-white pb-4 tracking-wide">
            Cafe Americano
          </h1>
          <h2 className="flex items-center justify-center md:justify-start text-xl roboto-medium text-gray-400 tracking-wide">
            15 Calories <MdInfoOutline />
          </h2>
        </article>
      </div>

      {isOrder ? (
        <Including />
      ) : (
        <div>
          <button
            className="flex p-2 sm:p-4 items-center text-base sm:text-xl font-semibold"
            onClick={handleBtn}
          >
            <IoIosArrowBack /> Done customizing
          </button>
          <Customize />
        </div>
      )}
      <article className="max-w-full flex justify-center items-center">
        <button
          onClick={handleBtn}
          className="flex sm:px-7 px-3 py-3  bg-[#1e3932] rounded-full text-white roboto-bold tracking-wide text-base sm:text-xl"
        >
          <GiFallingStar className="text-yellow-500 text-2xl mr-3" />
          {isOrder ? <span>Customize</span> : <span>Done Customizing</span>}
        </button>
        <button className="bg-green-800 roboto-medium md:px-8 px-4 py-3 md:py-4 text-base md:text-xl rounded-full text-white fixed bottom-16 md:bottom-24 right-2 md:right-8">
          Add To Order
        </button>
      </article>
    </article>
  );
};

export default AmericanosCon;
