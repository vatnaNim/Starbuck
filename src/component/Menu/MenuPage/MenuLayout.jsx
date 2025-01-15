import ParentsNavBar from "../../HomePage/navbar/ParentsNavBar";
import MenuBar from "./MenuBar";
import OrderBar from "./OrderBar";
import MainFooter from "../../HomePage/Footer/MainFooter";
import { Outlet } from "react-router-dom";

const ManuLayout = () => {
  return (
    <div className="max-w-full relative h-[100vh]">
      <ParentsNavBar />
      <MenuBar />

      <div className="max-w-full flex px-4 my-8">
        <Outlet />
      </div>

      <OrderBar />
      <MainFooter />
      <div className="h-[20vh]"></div>
    </div>
  );
};

export default ManuLayout;
