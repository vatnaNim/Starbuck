import { useState } from "react";
import DrowRightMenu from "./DrowRightMenu";
import InformationBar from "./InformationBar";
import ListBar from "./ListBar";
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

const ParentsNavBar = () => {
  const [isToggle, setIsToggle] = useState(false);
  function openBar() {
    setIsToggle(!isToggle);
  }

  return (
    <nav className="flex justify-between items-center px-8 py-2 border-black border-b-[1px] top-0  overflow-hidden shadow-lg sticky md:relative bg-white">
      <ListBar />
      <InformationBar />
      <div className="md:hidden ">
        <button
          className="p-3 rounded-full hover-3s hover:bg-green-600"
          onClick={openBar}
        >
          {isToggle ? (
            <IoIosClose className="text-[2rem]" />
          ) : (
            <FaBars className="text-[1.2rem] " />
          )}
        </button>
        {isToggle ? <DrowRightMenu /> : null}
      </div>
    </nav>
  );
};

export default ParentsNavBar;
