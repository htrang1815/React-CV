import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";
import SocialIcon from '../../components/SocialIcon'

const ContactContent = () => {
  return (
    <div id="contact" className="contact mt-[40px]">
      <section className="boxshadow">
        <div class="contact-content flex items-stretch justify-between">
          <div class="contact-form w-[50%] px-[30px] pt-[30px] pb-[45px]">
            <SectionTitle
              title={"Contact Form"}
              className={"mb-[30px] mt-[15px]"}
            ></SectionTitle>
            <form class="site-form">
              <div class="input-info flex items-center justify-between gap-[13px]">
                <input
                  type="text"
                  class="site-input h-[45px] w-[50%] text-[13px] pl-[10px] mb-[15px] outline-0 "
                  placeholder="Name"
                />
                <input
                  type="text"
                  class="site-input h-[45px] w-[50%] text-[13px] pl-[10px] mb-[15px] outline-0 "
                  placeholder="E-mail"
                />
              </div>
              <div class="input-mess">
                <textarea
                  class="site-area text-[13px] pt-5 pl-[10px] w-full "
                  placeholder="Message"
                ></textarea>
              </div>
              <Button text={'Submit'}></Button>
              {/* <div class="btn">
                <button
                  class="site-btn site-input h-[45px] tet-[13px] pl-[10px] mb-[15px] outline-0 "
                  type="submit"
                >
                  Submit
                </button>
              </div> */}
            </form>
          </div>

          <div class="contact-info w-[50%] px-[30px] pt-[30px] pb-[45px]">
          <SectionTitle
              title={"Contact Informations"}
              className={"mb-[30px] mt-[15px]"}
            ></SectionTitle>
            <ul>
               <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] pr-[5px]">Address:</span>
                 107727 Santa Monica Boulevard Los Angeles
              </li>
               <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] pr-[5px]">Phone:</span>
                 +38 012-3456-7890
              </li>
               <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] pr-[5px]">Job:</span>
                 Freelancee
              </li>
               <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] pr-[5px]">E-mail:</span>
                 chris@domain.com
              </li>
               <li className="text-[14px] text-[#787878] leading-[34px]">
                <span className="text-[#000] pr-[5px]">Skype:</span>
                 chrisjohnson85
              </li>
            </ul>
            <SocialIcon></SocialIcon>
          </div>
        </div>
        <div class="contact-map my-[15px] mx-0 p-[30px]">
        <SectionTitle
              title={"Contact Map."}
              className={"mb-[30px] mt-[15px]"}
            ></SectionTitle>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24396.455763004884!2d-115.13108354428735!3d36.18912977254862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+Kaliforniya%2C+Birle%C5%9Fik+Devletler!5e0!3m2!1str!2str!4v1509525039851"
              className="border: 0 h-[350px] w-[100%]"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;
