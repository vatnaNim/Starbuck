import React from "react";
import { Link } from "react-router-dom";
const ConCards = ({ productsName, imgScr, linkPage }) => {
  return (
    <Link to={linkPage} className="object-cover">
      <div className="max-w-full flex flex-row sm:flex-col items-center gap-4 ">
        <img
          src={imgScr}
          alt="products Image"
          className="lg:w-40 sm:w-24 w-20 block rounded-full"
        />
        <h2 className="roboto-regular xl:text-lg sm:text-base text-sm tracking-wide text-wrap text-start sm:text-center">
          {productsName}
        </h2>
      </div>
    </Link>
  );
};

export default ConCards;
