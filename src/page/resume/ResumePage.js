import React from "react";
import LeftContent from "../../components/LeftContent";
import BarTab from "../../components/BarTab";
import Footer from "../../components/Footer";
import ResumeContent from "./ResumeContent";

const ResumePage = () => {
  return (
    <div className=" mt-[60px] mb-0 mx-auto w-[75%] flex">
      <LeftContent></LeftContent>
      <div className="w-[75%] py-0 px-[15px]">
        <BarTab></BarTab>
        <ResumeContent></ResumeContent>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ResumePage;
