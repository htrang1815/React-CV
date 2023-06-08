import React from "react";

const WrapItem = ({ src, icon, name, info }) => {
  return (
    <div className="wrapper-item p-[15px]">
      <div className="item bg-[#fff] rounded-[6px] overflow-hidden relative cursor-pointer boxshadow">
        <div className="item-img">
          <img className="w-full object-cover" src={src} alt="" />
          <div className="icon absolute top-[50%] left-[50%] translate-x-[-50%]  opacity-[0.7] text-white pt-[17px] px-0 pb-[16px] w-[55px] rounded-full text-center transitionhover invisible bg-[#ffc500] ">
            <i className={icon}></i>
          </div>
        </div>
        <div className="item-detail p-[14px]">
          <span className="name text-[14px] text-[#000]">{name}</span>
          <br />
          <span className="info text-[13px] text-[#989898] leading-[18px]">
            {info}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WrapItem;
