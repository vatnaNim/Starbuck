import React from "react";
import { useState } from "react";
import ListF1 from "./ListF1";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const F1Cols = () => {
  const [isFooter, setIsFooter] = useState(false);
  function handleFooter() {
    setIsFooter(!isFooter);
  }
  return (
    <>
      <article className="hidden lg:block">
        <span className="py-4 flex w-full roboto-medium text-lg tracking-wider">
          About Us
        </span>
        <ListF1 />
      </article>

      <article className="block lg:hidden">
        <button
          className="py-4 flex w-full roboto-medium text-lg tracking-wider justify-between"
          onClick={handleFooter}
        >
          About Us
          {isFooter ? (
            <MdKeyboardArrowUp className="text-4xl font-semibold" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-4xl font-semibold" />
          )}
        </button>
        {isFooter && <ListF1 />}
      </article>
    </>
  );
};

export default F1Cols;
