import {
  Americanos,
  BrewedCoffees,
  Espresso,
  Cappuccinos,
  FlatWhites,
  Lattes,
  Macchiato,
  Mochas,
  CoffeeTravelers,
} from "../ProductsData/TypeProductsData";
import ConCards from "./ConCards";

const Con2 = () => {
  return (
    <article className="lg:max-w-full justify-start w-full pl-0 sm:pl-4 md:pl-[5.9rem] ">
      <h1 className="roboto-bold text-2xl lg:text-3xl mb-8 lg:my-3">
        Menu/HotCoffee
      </h1>
      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Americanos
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {Americanos.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Brewed Coffees
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {BrewedCoffees.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Cappuccinos
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {Cappuccinos.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Espresso
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {Espresso.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Flat White
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {FlatWhites.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Lattes
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {Lattes.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Macchiato
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {Macchiato.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Mochas
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {Mochas.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>

      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Coffee Travelers
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {CoffeeTravelers.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>
    </article>
  );
};

export default Con2;
