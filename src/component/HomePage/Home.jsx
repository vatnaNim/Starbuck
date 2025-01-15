import React from "react";
import ParentsNavBar from "./navbar/ParentsNavBar";
import ParentsContainer from "./Container/ParentsContainer";
import ParentsFAQs from "./FAQs/ParentsFAQs";
import MainFooter from "./Footer/MainFooter";
const Home = () => {
  return (
    <>
      <ParentsNavBar />
      <ParentsContainer />
      <ParentsFAQs />
      <MainFooter />
    </>
  );
};

export default Home;
