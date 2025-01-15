import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
const OrderBar = () => {
  return (
    <div className="w-full bg-green-900 fixed left-0 bottom-0 text-gray-400">
      <article className="max-w-full flex justify-around items-center p-3">
        <a href="#">
          <div className="flex items-center gap-0 md:gap-16 border-gray-400 border-b-2 py-2 md:p-2  ">
            <article className="flex md:flex-col flex-row">
              <p className="md:roboto-regular text-sm">
                For items availability,
              </p>
              <h2 className="md:text-xl text-sm md:font-bold font-normal tracking-wide md:roboto-bold text-gray-400 md:text-white">
                Choose a store
              </h2>
            </article>
            <FaAngleDown className="text-xl" />
          </div>
        </a>
        <HiOutlineShoppingBag className="text-4xl cursor-pointer" />
      </article>
    </div>
  );
};

export default OrderBar;
