import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-28">
      <article className="max-w-80 flex flex-col gap-6 tracking-wide">
        <h2 className="roboto-bold text-2xl">Favorite</h2>
        <img
          src="https://i.pinimg.com/564x/42/7a/a4/427aa49b2f4537793bdf942d04c31fc8.jpg"
          alt="Favorite img"
          className="w-40 pl-4"
        />
        <h1 className="roboto-bold text-2xl sm:text-3xl">
          Save your favorite mixes
        </h1>
        <p className="roboto-regular text-xl text-gray-500">
          Use the heart to save customizations.your favorites will appear here
          to order again.
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

export default Favorites;
