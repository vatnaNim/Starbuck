import React from "react";
import { Outlet } from "react-router-dom";
import RootLists from "../MenuCards/RootLists";
const ProductItems = () => {
  return (
    <div className="max-w-full flex px-4 my-8">
      <RootLists />
      <Outlet />
    </div>
  );
};

export default ProductItems;
