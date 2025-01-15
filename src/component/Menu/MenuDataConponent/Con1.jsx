import { IcedEnergy } from "../ProductsData/TypeProductsData";
import ConCards from "./ConCards";

const Con1 = () => {
  return (
    <article className="lg:max-w-full justify-start w-full pl-0 sm:pl-4 md:pl-[5.9rem] ">
      <h1 className="roboto-regular text-base mb-8 lg:my-3">
        Menu/ <span className="text-gray-500 ">IcedEnergy</span>
      </h1>
      <h2 className="roboto-bold text-xl lg:text-2xl my-3 lg:mt-10 lg:mb-5">
        Iced Energy
      </h2>
      <div className=" grid-cols-1 sm:grid-cols-4 grid gap-6 xl:gap-16 py-4 border-gray-300 border-t-2 ">
        {IcedEnergy.map((p) => {
          return <ConCards {...p} key={p.id} />;
        })}
      </div>
    </article>
  );
};

export default Con1;
