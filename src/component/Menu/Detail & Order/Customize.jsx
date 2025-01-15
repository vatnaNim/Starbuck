import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
const Customize = () => {
  const [isSwap, setIsSwap] = useState(true);
  const [isNumber, setIsNumber] = useState(1);
  const maxNumber = 12;
  const zeroNumber = 0;

  function handleIncrease() {
    if (isNumber < maxNumber) {
      setIsNumber(isNumber + 1);
    }
  }

  function handleDecrease() {
    if (isNumber > zeroNumber) {
      setIsNumber(isNumber - 1);
    }
    if (isNumber == 1) {
      setIsNumber(null);
    }
  }

  function handleSwap() {
    setIsSwap(!isSwap);
  }

  return (
    <div className="">
      <nav className="max-w-full">
        <article className="grid md:grid-cols-2 grid-rows-1 lg:gap-10 gap-4 px-2 sm:px-[7rem] py-8 roboto-regular">
          <ul className="sm:px-7 px-0 xl:px-24 flex flex-col ">
            <li className="mb-8">
              <div className=" border-b-4 mb-4 pb-2 border-green-100">
                <label htmlFor="Mike" className="sm:text-2xl text-xl ">
                  Milk
                </label>
              </div>
              <div className="">
                <select
                  name="Mike"
                  className="w-full p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium "
                >
                  <option value="none">Add Milk Options</option>
                  <option value="Heavy Cream">Heavy Cream</option>
                  <option value="2% Milk">2% Milk</option>
                  <option value="Whole Milk">Whole Milk</option>
                  <option value="Breve">Breve</option>
                  <option value="Almont">Almont</option>
                  <option value="Coconuts">Coconuts</option>
                  <option value="Soy">Soy</option>
                </select>
              </div>
            </li>

            <li className="mb-8">
              <div className=" border-b-4 mb-4 pb-2 border-green-100">
                <label htmlFor="Mike" className="sm:text-2xl text-xl ">
                  Flavors
                </label>
              </div>
              <div className="">
                <select
                  name="Flavors"
                  className="w-full p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium "
                >
                  <option value="none">Add Syrups</option>
                  <option value="Brown Sugar Syrups">Brown Sugar Syrups</option>
                  <option value="Caramel Syrups">Caramel Syrups</option>
                  <option value="Hazelnut Syrups">Hazelnut Syrups</option>
                  <option value="Vanilla Syrups">Vanilla Syrups</option>
                  <option value="Sugar Free vanilla Syrubs">
                    Sugar Free Vanilla Syrubs
                  </option>
                  <option value="Toffeenut Syrubs">Toffeenut Syrubs</option>
                </select>
              </div>
            </li>

            <li className="mb-8">
              <div className=" border-b-4 mb-4 pb-2 border-green-100">
                <label htmlFor="Add-ins" className="sm:text-2xl text-xl ">
                  Add-ins
                </label>
              </div>

              <select
                name="Add-Ins"
                className="w-full p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium "
              >
                <option value="None">Add Fruit Add-ins</option>
                <option value="Dragonfruit Inclusion">
                  Dragonfruit Inclusion
                </option>
                <option value="Freeze Dried Pineapple">
                  Freeze Dried Pineapple
                </option>
                <option value="Stawbarry Puree">Stawbarry Puree</option>
                <option value="Stawberries">Stawberries</option>
              </select>
            </li>

            <li className="mb-8">
              <span className="w-full flex justify-between p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium ">
                {isSwap
                  ? "Add Raspberry Flavored pearls"
                  : "Add Raspberry Flavored pearls Scoop"}

                {isSwap ? (
                  <button onClick={handleSwap}>
                    <CiCirclePlus className="text-3xl text-green-800" />
                  </button>
                ) : (
                  <article className=" gap-1 flex md:flex-col-reverse lg:flex-row ">
                    <button onClick={handleDecrease}>
                      <CiCircleMinus className="text-3xl text-green-800" />
                    </button>
                    <span className="flex items-center justify-center ">
                      {isNumber}
                    </span>
                    <button onClick={handleIncrease}>
                      <FaPlusCircle className="text-[1.6rem] text-green-800" />
                    </button>
                  </article>
                )}
              </span>
            </li>

            <li className="mb-8">
              <div className=" border-b-4 mb-4 pb-2 border-green-100">
                <label
                  htmlFor=" Juice Options"
                  className="sm:text-2xl text-xl "
                >
                  Juice Options
                </label>
              </div>

              <select
                name=" Juice Options"
                className="w-full p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium "
              >
                <option value="none">Add Juice Options</option>
                <option value="Peach Juice Options">Peach Juice Option</option>
                <option value="Apple Juice">Apple Juice</option>
              </select>
            </li>
            <div className=" border-b-4 mb-4 pb-2 border-green-100">
              <label htmlFor=" Juice Options" className="sm:text-2xl text-xl ">
                Toppings
              </label>
            </div>
          </ul>

          <ul className="sm:px-7 px-0 xl:px-24 flex flex-col ">
            <li className="mb-8">
              <div className=" border-b-4 mb-4 pb-2 border-green-100">
                <label htmlFor="Cold Foams" className="sm:text-2xl text-xl ">
                  Cold Foams
                </label>
              </div>

              <select
                name="Add Cold Foam"
                className="w-full p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium "
              >
                <option value="none">Add Cold Foam</option>
                <option value="Chocolate Cream Cold Foam">
                  Chocolate Cream Cold Foam
                </option>
                <option value="Cinnamon Sweet Cream Cold Foam">
                  Cinnamon Sweet Cream Cold Foam
                </option>
                <option value="Matcha Cream Cold Foam">
                  Matcha Cream Cold Foam
                </option>
                <option value=" Nondairy Oleato Golden Foam">
                  Nondairy Oleato Golden Foam
                </option>
                <option value="Salted Caramel Cream Cold Form">
                  Salted Caramel Cream Cold Form
                </option>
                <option value="Spicy Cream Cold Foam">
                  Spicy Cream Cold Foam
                </option>
                <option value="Strawberry Cream Cold Foam">
                  Strawberry Cream Cold Foam
                </option>
                <option value="Vanilla Sweet Cream Cold Foam">
                  Vanilla Sweet Cream Cold Foam
                </option>
                <option value="White Chocolate Macadamia Cream Cold Foam">
                  White Chocolate Macadamia Cream Cold Foam
                </option>
              </select>

              <select
                name="Add Nondairy Cold Foam"
                className="w-full mt-8 p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium "
              >
                <option value="Add Nondairy Cold Foam">
                  Add Nondairy Cold Foam
                </option>
                <option value="Nondairy Chocolate Cream Cold Foam">
                  Nondairy Chocolate Cream Cold Foam
                </option>
                <option value="Nondairy Matcha Cream Cold Foam">
                  Nondairy Matcha Cream Cold Foam
                </option>
                <option value="Nondairy Salted Caramel Cream Cold Foam">
                  Nondairy Salted Caramel Cream Cold Foam
                </option>
                <option value="Nondairy Strawberry Cream Cold Foam">
                  Nondairy Strawberry Cream Cold Foam
                </option>
                <option value="Nondairy Vanilla Sweet Cream Cold Foam">
                  Nondairy Vanilla Sweet Cream Cold Foam
                </option>
              </select>
            </li>

            <li className="mb-8">
              <div className=" border-b-4 mb-4 pb-2 border-green-100">
                <label htmlFor="Sweeteners" className="sm:text-2xl text-xl ">
                  Sweeteners
                </label>
              </div>

              <select
                name="Add Sweetener Packets"
                className="w-full p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium "
              >
                <option value="none">Add Sweetener Packets</option>
                <option value="Sugar">Sugar</option>
                <option value="Sugar In the Row">Sugar In the Row</option>
                <option value="Honey">Honey</option>
                <option value="Splenda">Splenda</option>
                <option value="Stevia in the Raw">Stevia in the Raw</option>
              </select>

              <select
                name="Add Liquid Sweeteners"
                className="w-full mt-8 p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium "
              >
                <option value="none">Add Liquid Sweeteners</option>
                <option value="Classic Syrup">Classic Syrup</option>
                <option value="Liquid Cane Sugar">Liquid Cane Sugar</option>
                <option value="Honey Blend">Honey Blend</option>
              </select>
            </li>

            <li className="mb-8">
              <div className=" border-b-4 mb-4 pb-2 border-green-100">
                <label htmlFor="Sweeteners" className="sm:text-2xl text-xl ">
                  Cup Options
                </label>
              </div>
              <span className="w-full flex justify-between p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium ">
                <label
                  for="PersonalCap"
                  className="flex justify-between w-full cursor-pointer"
                >
                  <h2 className="roboto-bold text-base">Personal Cap</h2>

                  <input
                    type="checkbox"
                    name="PersonalCap"
                    id="PersonalCap"
                    className="w-4 cursor-pointer"
                  />
                </label>
              </span>
            </li>

            <li className="mb-8">
              <div className=" border-b-4 mb-4 pb-2 border-green-100">
                <label htmlFor="Tea" className="sm:text-2xl text-xl ">
                  Tea
                </label>
              </div>

              <select
                name="Tea"
                className="w-full p-3 rounded-xl bg-gray-200 cursor-pointer roboto-medium "
              >
                <option value="None">Add Iced Tea</option>
                <option value="Dragonfruit Inclusion">
                  Splash of Black Tea
                </option>
                <option value="Freeze Dried Pineapple">
                  Splash of Green Tea
                </option>
                <option value="Stawbarry Puree">
                  Splash of Passion Tango Tea
                </option>
              </select>
            </li>
          </ul>
        </article>
      </nav>
    </div>
  );
};

export default Customize;
