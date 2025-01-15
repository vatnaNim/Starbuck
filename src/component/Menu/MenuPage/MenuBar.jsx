import React from "react";
import { NavLink } from "react-router-dom";
const ManuBar = () => {
  return (
    <div className="max-w-full bg-slate-100 border-b-2 shadow-sm">
      <ul className="flex gap-4 sm:gap-8 py-4 ml-[2rem] lg:ml-[8rem] md:ml-[6.8rem] roboto-regular text-sm ">
        <li>
          <NavLink to="/MenuPage/Menu" className="underLine2px">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="underLine2px">
            Featured
          </NavLink>
        </li>
        <li>
          <NavLink to="Previoud" className="underLine2px">
            Previous
          </NavLink>
        </li>
        <li>
          <NavLink to="Favorites" className="underLine2px">
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ManuBar;
