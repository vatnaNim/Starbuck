import React from "react";
import { useState } from "react";
import ListF5 from "./ListF5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const F5Cols = () => {
  const [isFooter, setIsFooter] = useState(false);
  function handleFooter() {
    setIsFooter(!isFooter);
  }
  return (
    <>
      <article className="hidden lg:block">
        <span className="py-4 flex w-full roboto-medium text-lg tracking-wider">
          Order and Pick Up
        </span>
        <ListF5 />
      </article>

      <article className="block lg:hidden">
        <button
          className="py-4 flex w-full roboto-medium text-lg tracking-wider justify-between"
          onClick={handleFooter}
        >
          Order and Pick Up
          {isFooter ? (
            <MdKeyboardArrowUp className="text-4xl font-semibold" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-4xl font-semibold" />
          )}
        </button>
        {isFooter && <ListF5 />}
      </article>
    </>
  );
};

export default F5Cols;
