import React from "react";

const Button = ({ text, className }) => {
  return (
    <div className="btn mt-[30px] text-center">
      <button
        className={`site-btn hover:bg-[#f0ac02] bg-[#ffc500] font-[500] text-[14px] rounded-[20px] leading-[35px] transitionhover py-[1px] px-[29px] inline-block ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
