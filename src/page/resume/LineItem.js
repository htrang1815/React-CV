import React from "react";

const LineItem = ({ title, time, text }) => {
  return (
    <li className="pt-0 pr-0 pb-[30px] pl-5 relative">
      <h3 className="line-title text-[16px] font-[500] text-[#333]">{title}</h3>
      <span className="line-time py-[9px] px-0 text-[12px]  text-[#333]">{time}</span>
      <p className="line-text text-[#989898] font-[400] leading-[18px] text-[13px]">{text}</p>
    </li>
  );
};

export default LineItem;
