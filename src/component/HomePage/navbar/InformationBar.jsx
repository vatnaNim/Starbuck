import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const InformationBar = () => {
  return (
    <div className="hidden md:block">
      <div className="flex gap-6">
        <a
          href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z"
          className="flex items-center gap-2 roboto-black hover-2s hover:text-green-800 "
        >
          <FaLocationDot className="text-[1.5rem]" /> Find a store
        </a>
        <div className="gap-6 flex ">
          <Link to="/SignIn">
            <button className="inline-btn roboto-bold hover-3s hover:bg-green-600">
              Sign in
            </button>
          </Link>

          <Link to="/SignUp">
            <button className="inline-btn roboto-bold border-none bg-black text-white hover-3s hover:bg-green-600">
              Join now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InformationBar;
