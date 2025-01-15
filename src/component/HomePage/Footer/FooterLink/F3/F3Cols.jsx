import React from "react";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ListF3 from "./ListF3";

const F3Cols = () => {
  const [isFooter, setIsFooter] = useState(false);
  function handleFooter() {
    setIsFooter(!isFooter);
  }
  return (
    <>
      <article className="hidden lg:block">
        <span className="py-4 flex w-full roboto-medium text-lg tracking-wider">
          Social Impact
        </span>
        <ListF3 />
      </article>

      <article className="block lg:hidden">
        <button
          className="py-4 flex w-full roboto-medium text-lg tracking-wider justify-between"
          onClick={handleFooter}
        >
          Social Impact
          {isFooter ? (
            <MdKeyboardArrowUp className="text-4xl font-semibold" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-4xl font-semibold" />
          )}
        </button>
        {isFooter && <ListF3 />}
      </article>
    </>
  );
};

export default F3Cols;
