import React from "react";
import { NavLink } from "react-router-dom";

const MenuLists = ({ name, cardLink }) => {
  return (
    <ul className="my-3 ml-4 px-[6rem] flex flex-col  text-wrap roboto-regular text-base text-gray-500 tracking-wide ">
      <li>
        <NavLink to={cardLink}>{name}</NavLink>
      </li>
    </ul>
  );
};

export default MenuLists;
