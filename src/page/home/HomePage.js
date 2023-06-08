import React from "react";
import LeftContent from "../../components/LeftContent";
import Footer from "../../components/Footer";
import BarTab from "../../components/BarTab";
import HomeContent from "./HomeContent";

const HomePage = () => {
  return (
    <div className=" container mt-[60px] mb-0 mx-auto w-[75%] flex">
      <LeftContent></LeftContent>
      <div className="w-[75%] py-0 px-[15px] content__right">
        <BarTab></BarTab>
        <HomeContent></HomeContent>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
