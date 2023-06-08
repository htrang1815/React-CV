import React from "react";

const LeftContent = () => {
  return (
    <div className="content__left w-[25%] py-0 px-[15px] ">
      <div className="profile w-full inline-block rounded-[6px] bg-[#fff]  boxshadow">
        <div className="profile-name leading-[18px] p-5 pb-0 ">
          <span className="name uppercase text-[17px] font-bold">
            Henry Rooney
          </span>
          <br />
          <span className="job text-[13px] text-[#777777]">
            Creative Designer
          </span>
        </div>
        <figure className="profile-image ">
          <img
            src="https://html.tavonline.co/mat/default/images/profile.jpg"
            alt=""
            className="w-full"
          />
        </figure>
        <ul class="profile-information ml-[35px] my-[8px]">
          <li className="pb-[10px] pl-[30px] relative after:boxshadow"></li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px] ">
              <span className="text-[#000] pr-[2px]">Name:</span>
              Chris Johnson
            </p>
          </li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px] ">
              <span className="text-[#000] pr-[2px]">Birthday:</span>
              06 December 1987
            </p>
          </li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px] ">
              <span className="text-[#000] pr-[2px]">Job:</span>
              Freelancer
            </p>
          </li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px] ">
              <span className="text-[#000] pr-[2px]">Email:</span>
              henry@domain.com
            </p>
          </li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px] ">
              <span className="text-[#000] pr-[2px]">Skype:</span>
              henryrooney85
            </p>
          </li>
        </ul>
        <div className="col-md-12 relative min-h-[1px] px-[15px]  mb-[30px]">
          <button className="site-btn icon mt-[18px] mx-auto block bg-[#ffc500] hover:bg-[#f0ac02] font-[500] text-[14px] rounded-[50px] leading-[35px] text-left py-[1px] pr-[6px] pl-[19px]">
            Download Cv
            <i className="fa fa-download" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
