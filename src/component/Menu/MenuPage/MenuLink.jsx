import {
  starbucksDrinks,
  foodMenu,
  StarbuckBean,
  assessoria,
} from "../ProductsData/StarbuckData";
import DisplayCard from "../MenuCards/DisplayCards";

const MenuLink = () => {
  return (
    <article className="lg:max-w-full w-full pl-4 md:pl-[5.9rem] lg:px-4">
      <h1 className="roboto-bold text-2xl lg:text-3xl mb-8 lg:my-3">Menu</h1>
      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Drinks
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-2 grid gap-4 py-4 border-gray-300 border-t-2 ">
        {starbucksDrinks.map((p) => {
          return <DisplayCard {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Food
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-2 grid gap-4  border-gray-300 border-t-2 py-4">
        {foodMenu.map((p) => {
          return <DisplayCard {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        At Home Coffee
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-2 grid gap-4  border-gray-300 border-t-2 py-4">
        {StarbuckBean.map((p) => {
          return <DisplayCard {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Merchandise
      </h2>
      <div className="grid-cols-1 sm:grid-cols-2 grid gap-4  border-gray-300 border-t-2 py-4">
        {assessoria.map((p) => {
          return <DisplayCard {...p} key={p.id} />;
        })}
      </div>
    </article>
  );
};

export default MenuLink;
