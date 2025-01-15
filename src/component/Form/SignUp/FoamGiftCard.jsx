import React from "react";

const FoamGiftCard = () => {
  return (
    <article className="w-full flex flex-col justify-center items-center my-4">
      <p className="text-sm roboto-regular cursor-text">
        Add your gift card to earn Stars when you pay or order ahead.
      </p>

      <div class="relative max-w-96 px-4 mt-4 ">
        <input
          type="text"
          id="digits"
          placeholder=" "
          className="form-control w-full px-4 pt-3 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent tracking-wider"
        />
        <label
          for="digits"
          class="form-label absolute top-2 left-6 text-black  transition-all bg-white px-1"
        >
          <span className="text-green-700">*</span> Card number(16 digits)
        </label>
        <div className="px-4 py-2">
          <label
            htmlFor="digits"
            className=" text-sm roboto-regular cursor-text"
          >
            No spaces or dashes
          </label>
        </div>
      </div>

      <div class="relative max-w-96 px-4">
        <input
          type="text"
          id="digits"
          placeholder=" "
          className="form-control w-full px-4 pt-3 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent tracking-wider"
        />
        <label
          for="digits"
          class="form-label absolute top-2 left-6 text-black transition-all bg-white px-1"
        >
          <span className="text-green-700">*</span> Security code
        </label>
        <div className="px-4 py-2">
          <label
            htmlFor="digits"
            className=" text-sm roboto-regular cursor-text"
          >
            Scratch to reveal 8-digit code
          </label>
        </div>
      </div>
    </article>
  );
};

export default FoamGiftCard;
