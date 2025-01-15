import React from "react";
import { useState } from "react";
import ListF2 from "./ListF2";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const F2Cols = () => {
  const [isFooter, setIsFooter] = useState(false);
  function handleFooter() {
    setIsFooter(!isFooter);
  }
  return (
    <>
      <article className="hidden lg:block">
        <span className="py-4 flex w-full roboto-medium text-lg tracking-wider">
          Careers
        </span>
        <ListF2 />
      </article>

      <article className="block lg:hidden">
        <button
          className="py-4 flex w-full roboto-medium text-lg tracking-wider justify-between"
          onClick={handleFooter}
        >
          Careens
          {isFooter ? (
            <MdKeyboardArrowUp className="text-4xl font-semibold" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-4xl font-semibold" />
          )}
        </button>
        {isFooter && <ListF2 />}
      </article>
    </>
  );
};

export default F2Cols;
