import { Link } from "react-router-dom";

const DisplayCard = ({ name, imgScr, cardLink }) => {
  return (
    <Link to={cardLink} className=" object-cover">
      <div className="max-w-full flex items-center gap-4 ">
        <img
          src={imgScr}
          alt="Menu Image"
          className="lg:w-28 w-20 block rounded-full"
        />
        <h2 className="roboto-medium lg:text-xl text-base tracking-wide text-wrap">
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default DisplayCard;
