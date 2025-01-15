import MainFooter from "../../HomePage/Footer/MainFooter";
import FoamNavBar from "../FoamNavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import { IoEyeOffOutline } from "react-icons/io5";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isDetails, setIsDetails] = useState(true);
  const [isUserName, setIsUserName] = useState(true);

  const handleUserName = () => {
    setIsUserName(!isUserName);
  };
  const handleToggleDetails = () => {
    setIsDetails(!isDetails);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <FoamNavBar />

      <div className="w-full flex flex-col justify-center items-center py-5 sm:py-12  relative ">
        <h2 className="text-center roboto-bold sm:text-3xl text-2xl font-bold px-4">
          Sign in or create an account
        </h2>
        <nav className="w-full md:w-[35rem] flex flex-col p-4 sm:p-8 gap-6 mt-6 sm:mt-12 rounded-none md:rounded-2xl shadow-none md:shadow-2xl border-none sm:border-2">
          <p className="text-base tracking-wide">
            <span className="text-green-800">*</span>indicates required field
          </p>

          <div class="w-full roboto-regular tracking-wide">
            <div class="relative mb-6">
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
                <span className="text-green-700">*</span>Username or email
                address
              </label>
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
                <span className="text-green-800 ">*</span> Password
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
          </div>
          <article className="flex items-center gap-1 text-base roboto-regular">
            <input
              type="checkbox"
              id="box"
              className="w-6 h-5 checked:bg-green-500 checked:border-transparent  cursor-pointer tracking-wider         "
            />

            <label htmlFor="box">Keep me sign in.</label>
            <button
              className=" text-base roboto-bold text-green-800 underline hover:no-underline"
              onClick={handleToggleDetails}
            >
              Details
            </button>
            {isDetails ? null : (
              <div className="max-w-48 sm:max-w-96 bg-white shadow-xl border-gray-100 border-2 text-base sm:text-base absolute top-10 sm:top-36 p-3 sm:p-4 rounded-xl">
                <p className="roboto-regular tracking-wide py-0  sm:py-4">
                  Checking this box will reduce the number of times your're
                  asked to sign in.To Keep your account secure,use this option
                  only on your personal devices.
                </p>
                <article className="flex justify-end">
                  <button
                    onClick={handleToggleDetails}
                    className="py-1 px-2 sm:px-4 rounded-xl hover:bg-gray-300 text-green-700 roboto-bold duration-200"
                  >
                    Got it
                  </button>
                </article>
              </div>
            )}
          </article>

          <article className="max-w-44 flex flex-col gap-1">
            {isUserName ? null : (
              <div className="max-w-52 sm:max-w-96 bg-white shadow-xl border-gray-100 border-2 text-base sm:text-base absolute top-56 sm:top-60 p-3 sm:p-4 rounded-xl">
                <p className="roboto-regular tracking-wide py-0  sm:py-4">
                  You can now use your email instead of a username.
                </p>
                <article className="flex justify-end">
                  <button
                    onClick={handleUserName}
                    className="py-1 px-2 sm:px-4 rounded-xl hover:bg-gray-300 text-green-700 roboto-bold duration-200"
                  >
                    Got it
                  </button>
                </article>
              </div>
            )}
            <button
              className=" text-base roboto-bold text-green-800 underline hover:no-underline"
              onClick={handleUserName}
            >
              Forgot your username?
            </button>
            <Link className="ml-1">
              <button className=" text-base roboto-bold text-green-800 underline hover:no-underline">
                Forgot your password?
              </button>
            </Link>
          </article>

          <article className="w-full flex justify-end">
            <button className="bg-green-800 text-white roboto-medium text-lg sm:text-xl sm:px-6 px-4 sm:py-3 py-2 rounded-full hover:bg-green-700 duration-300">
              Sign in
            </button>
          </article>
        </nav>
      </div>
      <MainFooter />
    </div>
  );
};

export default SignInPage;
