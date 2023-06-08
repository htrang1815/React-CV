import React from "react";
import SectionTitle from "../../components/SectionTitle";

const HomeContent = () => {
  return (
    <div className="content bg-[#ffffff] rounded-[6px] mt-[35px]">
      <div id="home" className="home active boxshadow">
        <div className="row">
          <section className="about-me py-[45px] px-[30px]">
            <SectionTitle title={"About Me"}></SectionTitle>
            <p className="mt-[30px] text-[13px] text-[#4c4c4c] leading-[24px]">
              Started earnest brother believe an exposed so. Me he believing
              daughters if forfeited at furniture. Age again and stuff downs
              spoke. Late hour new nay able fat each sell. Nor themselves age
              introduced frequently use unsatiable devonshire get. They why quit
              gay cold rose deal park. One same they four did ask busy. Reserved
              opinions fat him nay position. Breakfast as zealously incommode do
              agreeable furniture. One too nay led fanny allow plate.
              <br />
              <br />
              Quick six blind smart out burst. Perfectly on furniture dejection
              determine my depending an to. Add short water court fat. Her
              bachelor honoured perceive securing but desirous ham required.
              Questions deficient acuteness to engrossed as. Entirely led ten
              humoured greatest and yourself. Besides ye country on observe. She
              continue appetite endeavor she judgment interest the met. For she
              surrounded motionless fat resolution may.
            </p>
          </section>
        </div>
        <div className="row">
          <section className="services bg-[#fafafa] py-[45px] px-[30px]">
            <SectionTitle
              title={"My Services"}
              className="mb-[45px]"
            ></SectionTitle>
            <div className="row services-list flex items-stretch justify-between gap-[30px]">
              <div className="service-item w-[25%]">
                <div className="service bg-[#fff] p-5 boxshadow rounded-lg h-full">
                  <div className="icon">
                    <i className=" flaticon-html "></i>
                  </div>
                  <span className="title text-[14px] font-[500] leading-[30px]">
                    Web Development
                  </span>
                  <p className="little-text text-[#989898] font-[400] leading-[18px] text-[13px]">
                    I have been working on web design for 10 years.
                  </p>
                </div>
              </div>
              <div className="service-item w-[25%]">
                <div className="service bg-[#fff] p-5 boxshadow rounded-lg h-full">
                  <div className="icon">
                    <i className=" flaticon-attach"></i>
                  </div>
                  <span className="title text-[14px] font-[500] leading-[30px]">
                    Branding Identity
                  </span>
                  <p className="little-text text-[#989898] font-[400] leading-[18px] text-[13px]">
                    We will make you a brand that is catchy and leaves a trace.
                  </p>
                </div>
              </div>
              <div className="service-item w-[25%]">
                <div className="service bg-[#fff] p-5 boxshadow rounded-lg h-full">
                  <div className="icon">
                    <i className=" flaticon-vector"></i>
                  </div>
                  <span className="title text-[14px] font-[500] leading-[30px]">
                    Illustrator
                  </span>
                  <p className="little-text text-[#989898] font-[400] leading-[18px] text-[13px]">
                    I have been working on illustration design for 6 years.
                  </p>
                </div>
              </div>
              <div className="service-item w-[25%]">
                <div className="service bg-[#fff] p-5 boxshadow rounded-lg h-full">
                  <div className="icon">
                    <i className=" flaticon-schedule"></i>
                  </div>
                  <span className="title text-[14px] font-[500] leading-[30px]">
                    Fast Delivery
                  </span>
                  <p className="little-text text-[#989898] font-[400] leading-[18px] text-[13px]">
                    I deliver your business as fast as possible.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="row skill flex items-center justify-between">
          <section className=" w-full design-skills px-[30px] py-[45px]">
            <SectionTitle
              title={"Design Skills"}
              className={"mb-[50px]"}
            ></SectionTitle>
            <ul className="skill-list">
              <li>
                <h3 className=" text-[13px] font-[500]">Photoshop</h3>
                <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                  <div className="detail h-[5px] rounded-[3px] bg-[#ffb100] w-[80%]"></div>
                </div>
              </li>
              <li>
                <h3 className=" text-[13px] font-[500]">Sketch</h3>
                <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                  <div className="detail h-[5px] rounded-[3px] bg-[#ffb100] w-[60%]"></div>
                </div>
              </li>
              <li>
                <h3 className=" text-[13px] font-[500]">Adobe Xd</h3>
                <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                  <div className="detail h-[5px] rounded-[3px] bg-[#ffb100] w-[50%]"></div>
                </div>
              </li>
            </ul>
          </section>
          <section className=" w-full code-skills px-[30px] py-[45px]">
            <SectionTitle
              title={"Code Skills"}
              className={"mb-[50px]"}
            ></SectionTitle>
            <ul className="skill-list">
              <li>
                <h3 className=" text-[13px] font-[500]">Javascript</h3>
                <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                  <div className="detail h-[5px] rounded-[3px] bg-[#ffb100] w-[80%]"></div>
                </div>
              </li>
              <li>
                <h3 className=" text-[13px] font-[500]">HTML5</h3>
                <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                  <div className="detail h-[5px] rounded-[3px] bg-[#ffb100] w-[70%]"></div>
                </div>
              </li>
              <li>
                <h3 className=" text-[13px] font-[500]">CSS3</h3>
                <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                  <div className="detail h-[5px] rounded-[3px] bg-[#ffb100] w-[60%]"></div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
