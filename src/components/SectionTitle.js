import React from "react";

const SectionTitle = ({title, className}) => {
  return (
    <div className={`section-title relative inline-block py-0 px-[3px] ${className}`}>
      <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
      <h2 className="text-[18px] font-[600]">{title}</h2>
    </div>
  );
};

export default SectionTitle;
