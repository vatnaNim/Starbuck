import React from "react";
import FoamNavBar from "../FoamNavBar";
import MainFooter from "../../HomePage/Footer/MainFooter";
import { IoEyeOffOutline } from "react-icons/io5";
import { GoEye } from "react-icons/go";
import { useState } from "react";
import { RiShareBoxFill } from "react-icons/ri";
import FoamGiftCard from "./FoamGiftCard";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isUserName, setIsUserName] = useState(true);
  const [isDropBtn, SetIsDropBtn] = useState(false);
  const handleUserName = () => {
    setIsUserName(!isUserName);
  };

  const handleIsDropBtn = () => {
    SetIsDropBtn(!isDropBtn);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <FoamNavBar />
      <div className="w-full flex flex-col justify-center items-center py-5 sm:py-12  relative ">
        <nav className="w-full md:w-[35rem] flex flex-col p-4 sm:p-8 gap-6 mt-6 sm:mt-12 rounded-none md:rounded-2xl shadow-none md:shadow-2xl border-none sm:border-2">
          <p className="text-base tracking-wide">
            <span className="text-green-800">*</span>indicates required field
          </p>

          <div class="w-full roboto-regular tracking-wide">
            <h2 className="text-xl roboto-bold mb-7">Personal Information</h2>

            <div class="relative mb-6">
              <input
                type="text"
                id="FristName"
                placeholder=" "
                className="form-control w-full px-4 pt-3 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent tracking-wider"
              />
              <label
                for="FristName"
                class="form-label absolute top-2 left-3 text-black  transition-all bg-white px-1"
              >
                <span className="text-green-700">*</span>Frist name
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="LastName"
                placeholder=" "
                className="form-control w-full px-4 pt-3 pb-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
              />
              <label
                htmlFor="LastName"
                className="form-label absolute top-2 left-3 text-black transition-all bg-white px-1"
              >
                <span className="text-green-800 ">*</span> Last name
              </label>
            </div>
          </div>

          <div class="w-full roboto-regular tracking-wide">
            <h2 className="text-xl roboto-bold mb-7">Account Security</h2>

            <div class="relative ">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="form-control w-full px-4 pt-3 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent tracking-wider"
              />
              <label
                for="email"
                class="form-label absolute top-2 left-3 text-black  transition-all bg-white px-1"
              >
                <span className="text-green-700">*</span> Email address
              </label>
              <div className="px-4 py-2">
                <label
                  htmlFor="email"
                  className=" text-sm roboto-regular cursor-text"
                >
                  This will be your username
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                className="form-control w-full px-4 pt-3 pb-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
              />
              <label
                htmlFor="password"
                className="form-label absolute top-2 left-3 text-black transition-all bg-white px-1"
              >
                <span className="text-green-800 ">*</span> Last name
              </label>

              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute inset-y-0 right-0 px-3 text-gray-500 focus:outline-none"
              >
                {showPassword ? (
                  <IoEyeOffOutline className="text-xl sm:text-2xl" />
                ) : (
                  <GoEye className=" text-xl sm:text-2xl" />
                )}
              </button>
            </div>
            <div className="px-4 py-2">
              <label
                htmlFor="password"
                className=" text-sm roboto-regular cursor-text"
              >
                Create a password 8 to 25 characters long that includes at least
                1 uppercase and 1 lowercase letter,1 number and special
                character like an exclamation point or asterisk.
              </label>
            </div>
          </div>

          <button
            onClick={handleIsDropBtn}
            className="text-base underline text-green-800 roboto-medium flex items-center"
          >
            Already have a StarBucks Gift Card?
            {isDropBtn ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {isDropBtn ? <FoamGiftCard /> : null}
          <article className="max-w-full text-sm">
            <h3 className="roboto-medium-italic tracking-widest">
              COLLECT MORE STARS & EARN REWARDS
            </h3>
            <h4 className="roboto-bold tracking-wider py-8">
              Email is a great way to know about offers and what's new form
              Starbucks.
            </h4>

            <article className="flex gap-1">
              <input
                type="checkbox"
                id="initiatives"
                className="w-8 cursor-pointer"
              />
              <label
                htmlFor="initiatives"
                className="roboto-bold text-md tracking-wider"
              >
                Yes,I'd like email from Starbuck
              </label>
            </article>

            <label htmlFor="initiatives" className="text-base tracking-wide">
              <p className="py-4 px-9">
                Know about initiatives, announcements and product offers.
              </p>
            </label>
          </article>
          <h3 className="text-base tracking-widest roboto-medium font-bold text-gray-600">
            TERMS OF USE
          </h3>

          <article className="w-full flex items-start gap-1">
            <div className="mt-2 ml-0 sm:ml-2 w-16">
              <input
                type="checkbox"
                id="privacy"
                className=" cursor-pointer w-full h-5 "
              />
            </div>

            <label
              htmlFor="privacy"
              className="text-sm leading-6 sm:text-md tracking-wider px-0 sm:px-2 roboto-medium "
            >
              <span className="text-green-800 font-bold text-lg sm:text-xl">
                *
              </span>{" "}
              I agree to the
              <a
                href="#"
                className="inline-flex items-center text-green-900 underline gap-1 roboto-medium px-0 sm:pl-1"
              >
                Starbucks Rewards Terms
                <RiShareBoxFill />
              </a>{" "}
              and the
              <a
                href="#"
                className="inline-flex items-center text-green-900 underline gap-1 roboto-medium px-0 sm:pl-1"
              >
                Starbucks Cards Terms
                <RiShareBoxFill />
              </a>
              and have read the
              <a
                href="#"
                className="inline-flex items-center text-green-900 underline gap-1 roboto-medium px-0 sm:px-1 "
              >
                Starbucks Privacy Statement
                <RiShareBoxFill />
              </a>
              .
            </label>
          </article>

          <article className="w-full flex justify-end mt-12">
            <button className="bg-green-800 text-white roboto-medium text-lg sm:text-xl sm:px-6 px-4 sm:py-3 py-2 rounded-full hover:bg-green-700 duration-300">
              Create account
            </button>
          </article>
        </nav>
      </div>

      <MainFooter />
    </>
  );
};

export default SignUpPage;
