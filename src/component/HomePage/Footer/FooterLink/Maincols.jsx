import F1Cols from "./F1/F1Cols";
import F2Cols from "./F2/F2Cols";
import F3Cols from "./F3/F3Cols";
import F4Cols from "./F4/F4Cols";
import F5Cols from "./F5/F5Cols";
const Maincols = () => {
  return (
    <div className=" max-w-full border-t-2 shadow-black py-4">
      <div className="lg:max-w-[80%] max-w-full grid grid-cols-1 lg:grid-cols-5 px-10  roboto-regular gap-4 ">
        <F1Cols />
        <F2Cols />
        <F3Cols />
        <F4Cols />
        <F5Cols />
      </div>
    </div>
  );
};

export default Maincols;
