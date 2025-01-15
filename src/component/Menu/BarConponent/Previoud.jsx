import { Link } from "react-router-dom";

const Previoud = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-28">
      <article className="max-w-80 flex flex-col gap-6 tracking-wide">
        <h2 className="roboto-bold text-2xl">Previous</h2>
        <img
          src="https://i.pinimg.com/564x/43/41/a6/4341a6d05118bf26ce880aedd5b1fb16.jpg"
          alt="Previous img"
          className="w-40 pl-4"
        />
        <h1 className="roboto-bold text-2xl sm:text-3xl">
          When history repeats itself
        </h1>
        <p className="roboto-regular text-base text-gray-500 font-semibold">
          Previous Orders will appear here to quickly order again.
        </p>
        <div className="gap-4 sm:gap-4 flex flex-wrap">
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
      </article>
    </div>
  );
};

export default Previoud;
