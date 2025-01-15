import MenuLists from "../MenuPage/MenuLists";
import {
  starbucksDrinks,
  foodMenu,
  StarbuckBean,
  assessoria,
} from "../ProductsData/StarbuckData";

const RootLists = () => {
  return (
    <div className="w-80 hidden lg:flex flex-col justify-start items-start">
      <h1 className="roboto-medium text-xl tracking-wide text-black py-3 ml-[7.1rem]">
        Drinks
      </h1>
      {starbucksDrinks.map((p) => {
        return <MenuLists {...p} key={p.id} />;
      })}

      <h1 className="roboto-medium text-xl tracking-wide text-black py-3 ml-[7.1rem]">
        Food
      </h1>
      {foodMenu.map((p) => {
        return <MenuLists {...p} key={p.id} />;
      })}

      <h1 className="roboto-medium text-xl tracking-wide text-black py-3 ml-[7.1rem]">
        At Home Coffee
      </h1>
      {StarbuckBean.map((p) => {
        return <MenuLists {...p} key={p.id} />;
      })}

      <h1 className="roboto-medium text-xl tracking-wide text-black py-3 ml-[7.1rem]">
        Merchandise
      </h1>
      {assessoria.map((p) => {
        return <MenuLists {...p} key={p.id} />;
      })}
    </div>
  );
};

export default RootLists;
