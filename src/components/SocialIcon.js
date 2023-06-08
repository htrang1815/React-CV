import React from "react";

const SocialIcon = () => {
  return (
    <div className="social-icons gap-x-[5px]">
      <a
        href="#"
        className="fb text-[12px] inline-block w-[24px] h-[18px] transitionhover hover:text-[14px] hover:text-[#3b5998]"
      >
        <i aria-hidden="true" className="fa fa-facebook"></i>
      </a>
      <a
        href="#"
        className="tw text-[12px] inline-block w-[24px] h-[18px] transitionhover hover:text-[14px] hover:text-[#55acee]"
      >
        <i aria-hidden="true" className="fa fa-twitter"></i>
      </a>
      <a
        href="#"
        className="ins text-[12px] inline-block w-[24px] h-[18px] transitionhover hover:text-[14px] hover:text-[#cd486b]"
      >
        <i aria-hidden="true" className="fa fa-instagram"></i>
      </a>
      <a
        href="#"
        className="dr text-[12px] inline-block w-[24px] h-[18px] transitionhover hover:text-[14px] hover:text-[#ea4c89]"
      >
        <i aria-hidden="true" className="fa fa-dribbble"></i>
      </a>
    </div>
  );
};

export default SocialIcon;
