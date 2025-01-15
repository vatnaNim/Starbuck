import { Link, NavLink } from "react-router-dom";
import logo from "./logoP.jpg";

const ListBar = () => {
  return (
    <div className="flex items-center roboto-bold ">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-16 mr-3 lg:mr-5 rounded-full overflow-hidden sm:12 lg:w-20 "
        />
      </Link>

      <div className="hidden md:block ">
        <ul className="flex gap-10 hover-3s ">
          <li className=" hover:text-green-700 ">
            <NavLink to="/MenuPage/Menu" className="underLineBorder">
              Menu
            </NavLink>
          </li>
          <li className=" hover:text-green-700">
            <NavLink to="/Rewards">Rewards</NavLink>
          </li>
          <li className=" hover:text-green-700">
            <NavLink to="/GiftCards">Gift Cards</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListBar;
