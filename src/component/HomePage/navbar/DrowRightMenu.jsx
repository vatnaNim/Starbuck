import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DrowRightMenu = () => {
  return (
    <div className=" fixed left-0 top-[11.7%] h-full w-full flex flex-row z-40">
      <div className=" max-w-48 h-full w-48 cursor-pointer filter-blur"></div>

      <div className=" w-full w-h-full py-16 px-6  roboto-medium  bg-slate-100  top-0 left-0">
        <ul className="flex flex-col gap-8 hover-3s  pb-14  border-b-[1px] border-black text-lg tracking-wider ">
          <li className=" hover:text-green-700">
            <Link to="menu">Menu</Link>
          </li>
          <li className=" hover:text-green-700">
            <Link to="Rewards">Rewards</Link>
          </li>
          <li className=" hover:text-green-700">
            <Link to="GiftCards">Gift Cards</Link>
          </li>
        </ul>
        <a
          href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z"
          className="flex items-center gap-2 roboto-black hover-2s hover:text-green-800 py-6"
        >
          <FaLocationDot className="text-[1.5rem] " /> Find a store
        </a>
        <div className="gap-4 sm:gap-4  flex flex-wrap">
          <Link to="/SignIn">
            <button className="inline-btn roboto-bold hover-3s hover:bg-green-600">
              Sign in
            </button>
          </Link>

          <Link to="/SignUp">
            <button className="inline-btn roboto-bold border-none bg-black text-white hover-3s hover:bg-green-600">
              Join now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DrowRightMenu;
