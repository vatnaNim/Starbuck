import React, { useState } from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { CiCoffeeCup } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
const Including = () => {
  const [selectedSize, setSelectedSize] = useState("Grande");
  const [shots, setShots] = useState(3);
  const maxNumber = 12;
  const zeroNumber = 0;

  function handleIncrease() {
    if (shots < maxNumber) {
      setShots(shots + 1);
    }
  }

  function handleDecrease() {
    if (shots > zeroNumber) {
      setShots(shots - 1);
    }
    if (shots == 1) {
      setShots(1);
    }
    if (shots == 1) {
      return null;
    }
  }

  const handleChange = (e) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div className="w-full roboto-regular ">
      <nav className="md:px-28 px-0 grid grid-rows-1 md:grid-cols-2 py-8 gap-4 lg:gap-32">
        <article>
          <h1 className=" font-semibold tracking-wider text-2xl mb-4 px-4">
            Size options
          </h1>
          <hr className="border-t-4 p-4 sm:p-8" />
          <div className="flex justify-center items-center space-x-4 overflow-hidden p-4 sm:p-8 ">
            <label className="flex flex-col items-center cursor-pointer ">
              <input
                type="radio"
                name="size"
                value="Short"
                checked={selectedSize === "Short"}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`p-3 flex items-center justify-center overflow-hidden border-2 border-white  rounded-full${
                  selectedSize === "Short"
                    ? "border-2 border-green-900  rounded-full bg-green-100"
                    : ""
                }`}
              >
                <BiCoffeeTogo className="text-2xl" />
              </div>
              <div className="text-center">
                <h2 className="text-md font-semibold">Short</h2>
                <p className="text-sm ">8 fl oz</p>
              </div>
            </label>

            <label className="flex flex-col items-center cursor-pointer">
              <input
                type="radio"
                name="size"
                value="Tall"
                checked={selectedSize === "Tall"}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`p-3 flex items-center justify-center overflow-hidden border-2 border-white  rounded-full ${
                  selectedSize === "Tall"
                    ? "border-2 border-green-900  rounded-full bg-green-100"
                    : ""
                }`}
              >
                <CiCoffeeCup className="text-2xl" />
              </div>
              <div className="text-center">
                <h2 className="text-md font-semibold">Tall</h2>
                <p className="text-sm ">12 fl oz</p>
              </div>
            </label>

            <label className="flex flex-col items-center cursor-pointer">
              <input
                type="radio"
                name="size"
                value="Grande"
                checked={selectedSize === "Grande"}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`p-3 flex items-center justify-center overflow-hidden border-2 border-white  rounded-full${
                  selectedSize === "Grande"
                    ? "border-2 border-green-900  rounded-full bg-green-100"
                    : ""
                }`}
              >
                <CiCoffeeCup className="text-2xl" />
              </div>
              <div className="text-center">
                <h2 className="text-md font-semibold">Grande</h2>
                <p className="text-sm">16 fl oz</p>
              </div>
            </label>

            <label className="flex flex-col items-center cursor-pointer ">
              <input
                type="radio"
                name="size"
                value="Venti"
                checked={selectedSize === "Venti"}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`p-3 flex items-center justify-center overflow-hidden border-2 border-white  rounded-full${
                  selectedSize === "Venti"
                    ? "border-2  border-green-900  rounded-full bg-green-100"
                    : ""
                }`}
              >
                <CiCoffeeCup className="text-2xl" />
              </div>
              <div className="text-center">
                <h2 className="text-md font-semibold">Venti</h2>
                <p className="text-sm ">20 fl oz</p>
              </div>
            </label>
          </div>

          <a
            href="#"
            className="my-7 sm:my-12 mx-0sm:mx-28 max-w-96 flex text-base text-gray-500 roboto-medium"
          >
            <CiLocationOn className="text-2xl mr-2" />
            Select a store to view availability
          </a>
        </article>

        <article>
          <div className="">
            <h1 className=" font-semibold tracking-wider text-2xl mb-4 px-4">
              What's included
            </h1>
            <hr className="border-t-4 p-4 sm:p-8" />

            <div className="relative mb-7 p-2 border rounded">
              <label className="absolute -top-2.5 left-2 bg-white px-1 text-sm text-gray-400 tracking-wide">
                Add-ins
              </label>
              <select className="w-full border-none border-gray-300  rounded py-1">
                <option>Water</option>
                <option>Extra Water</option>
                <option>Light Water</option>
                <option>No Water</option>
              </select>
            </div>

            <div className="relative mb-7 p-2 border rounded">
              <label className="absolute -top-2.5 left-2 px-1 text-sm text-gray-400 tracking-wide">
                Espresso & Shot Options
              </label>
              <select className="w-full border-none py-1 rounded ">
                <option>Signature Espresso Roast</option>
                <option>Blode Espresso Roast</option>
                <option>Decaf Espresso Roast</option>
                <option>1/2 Decaf Espresso Roast</option>
                <option>1/3 Decaf Espresso Roast</option>
                <option>2/3 Decaf Espresso Roast</option>
              </select>
            </div>

            <div className="relative px-4 py-2 border rounded">
              <label className="absolute -top-2.5 left-2  px-1 text-sm text-gray-400 tracking-wide">
                Espresso & Shot Options
              </label>
              <div className="flex items-center justify-between">
                <span>Shots</span>
                <div className="flex items-center">
                  <button
                    onClick={handleDecrease}
                    className={`px-3 py-1/2  border-2 border-green-800 rounded-full text-green-600 ${
                      shots <= 1 ? "hidden" : ""
                    }`}
                  >
                    <span className="text-xl">-</span>
                  </button>
                  <span className="mx-2">{shots}</span>
                  <button
                    onClick={handleIncrease}
                    className={`px-2 py-1/2  border-2 border-green-800  rounded-full text-green-600 ${
                      shots >= 12 ? "hidden" : " "
                    }`}
                  >
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </nav>

      <article className="roboto-bold bg-green-900 px-4 md:px-28 py-8 text-white flex flex-col gap-4 mb-4">
        <span className="w-20 rounded-md border-yellow-500 flex justify-center items-center border-2 text-yellow-500 p-1">
          200
          <IoIosStar className="text-2xl" />
          item
        </span>
        <p className=" max-w-96 roboto-regular text-sm">
          Espresso shots topped with hot water create a light layer of crema
          culminating in this wonderfully rich cup with depth and muance.
        </p>
        <h1 className="flex items-center">
          15 calories,Og sugar,og fat <CiCircleInfo className="text-xl ml-2" />
        </h1>
        <article>
          <a href="#">
            <button className="border-2 py-1 px-3 rounded-2xl">
              Full nutrition & ingredients list
            </button>
          </a>
        </article>
      </article>
    </div>
  );
};

export default Including;
