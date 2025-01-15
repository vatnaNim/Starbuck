import React from "react";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ListF4 from "./ListF4";

const F4Cols = () => {
  const [isFooter, setIsFooter] = useState(false);
  function handleFooter() {
    setIsFooter(!isFooter);
  }
  return (
    <>
      <article className="hidden lg:block">
        <span className="py-4 flex w-full roboto-medium text-lg tracking-wider">
          For Business Partners
        </span>
        <ListF4 />
      </article>

      <article className="block lg:hidden">
        <button
          className="py-4 flex w-full roboto-medium text-lg tracking-wider justify-between"
          onClick={handleFooter}
        >
          For Business Partners
          {isFooter ? (
            <MdKeyboardArrowUp className="text-4xl font-semibold" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-4xl font-semibold" />
          )}
        </button>
        {isFooter && <ListF4 />}
      </article>
    </>
  );
};

export default F4Cols;
