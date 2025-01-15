import FristContainer from "./FristContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FouthContainer from "./FouthContainer";
import FiveContainer from "./FiveContainer";

const ParentsContainer = () => {
  return (
    <div className="p-0 md:p-5 w-full">
      <FristContainer
        imgScr="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-92442.jpg"
        title="Enjoy half off your frist drink"
        text="Download the app for half off a handcrafted drink during your frist weekend.*** Plus,tap into mobile ordering, exclusive offers and so much more."
      />
      <SecondContainer
        imgScr="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-91976.jpg"
        title="Dads,grads & Starbucks Cards"
        text="Got a Starbucks Card?Start earning free drinks & food twice as fast when you join and use your Starbucks Cards in the app.**"
      />
      <ThirdContainer
        imgScr="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-92463.jpg"
        title="Meet the Starbucks Pairings Menu"
        text="Crave-worthy pairings including our new,best-ever iced coffee.Restrictions apply."
      />
      <FouthContainer
        imgScr="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-92096.jpg"
        title="Summertime crew"
        text="Super chill flavors,all lined up and ready for fun."
      />
      <FiveContainer
        imgScr="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-92108.jpg"
        title="Personal cups for good"
        text="Your choice is a positive and responsible one-because bringing your clean reusable cup help our planet."
      />
    </div>
  );
};

export default ParentsContainer;
