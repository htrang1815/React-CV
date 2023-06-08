import React from "react";
import SectionTitle from "../../components/SectionTitle";
import WrapItem from "./WrapItem";

const PortfolioContent = () => {
  return (
    <div
      id="portfolio"
      className="portfolio pt-0 rounded-lg bg-[#fff]  mt-[45px] px-[15px] pb-[30px]"
    >
      <section>
        <div className="content-header py-0 px-[15px] mb-[15px]">
          <SectionTitle
            title={"Portfolio"}
            className={"my-[30px]"}
          ></SectionTitle>
          <div className="filter-container flex items-center justify-start">
            <div className="filter text-[#ffc500] text-[14px] mr-[15px]">
              All
            </div>
            <div className="filter mr-[15px] text-[14px] text-[#787878] cursor-pointer">
              Web Design
            </div>
            <div className="filter mr-[15px] text-[14px] text-[#787878] cursor-pointer">
              Motion Graphic
            </div>
            <div className="filter mr-[15px] text-[14px] text-[#787878] cursor-pointer">
              Illustration
            </div>
            <div className="filter mr-[15px] text-[14px] text-[#787878] cursor-pointer">
              Photography
            </div>
          </div>
        </div>

        <div className="wrapper bg-[#fcfcfc] grid grid-cols-3">
          <WrapItem
            src={
              "https://html.tavonline.co/mat/default/images/works/work-01.jpg"
            }
            icon={"fa fa-clone"}
            name={"Babel Admin"}
            info={"An admin template design."}
          ></WrapItem>
          <WrapItem
            src={
              "https://html.tavonline.co/mat/default/images/works/work-02.jpg"
            }
            icon={"fa fa-play"}
            name={"George Motion"}
            info={"An admin template design."}
          ></WrapItem>
          <WrapItem
            src={
              "https://html.tavonline.co/mat/default/images/works/work-03.jpg"
            }
            icon={"fa fa-picture-o"}
            name={"Amazon Travel"}
            info={"Nature photography work."}
          ></WrapItem>
          <WrapItem
            src={
              "https://html.tavonline.co/mat/default/images/works/work-04.jpg"
            }
            icon={"fa fa-clone"}
            name={"My Workspace"}
            info={"My current workspace design."}
          ></WrapItem>
          <WrapItem
            src={
              "https://html.tavonline.co/mat/default/images/works/work-05.jpg"
            }
            icon={"fa fa-play"}
            name={"Recoba Template"}
            info={"Html template design."}
          ></WrapItem>
          <WrapItem
            src={
              "https://html.tavonline.co/mat/default/images/works/work-06.jpg"
            }
            icon={"fa fa-clone"}
            name={"Doddy App"}
            info={"Mobile app ui kit design."}
          ></WrapItem>
          <WrapItem
            src={
              "https://html.tavonline.co/mat/default/images/works/work-07.jpg"
            }
            icon={"fa fa-clone"}
            name={"Bob Stayler"}
            info={"Illustration characher design."}
          ></WrapItem>
          <WrapItem
            src={
              "https://html.tavonline.co/mat/default/images/works/work-08.jpg"
            }
            icon={"fa fa-clone"}
            name={"Exemag Wordpress Theme"}
            info={"Multiconcept Blog Theme."}
          ></WrapItem>
          <WrapItem
            src={
              "https://html.tavonline.co/mat/default/images/works/work-09.jpg"
            }
            icon={"fa fa-clone"}
            name={"Babel Admin Html Code"}
            info={"Multiconcept Blog Theme."}
          ></WrapItem>
        </div>

        <div className="btn mt-[30px] text-center ">
          <button className="site-btn bg-[#ffc500] font-[500] text-[14px] rounded-full leading-[35px] transitionhover py-[1px] p-[29px] inline-block hover:bg-[#f0ac02]">
            Load more (3)
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioContent;
