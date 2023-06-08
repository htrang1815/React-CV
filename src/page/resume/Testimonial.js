import React from "react";

const Testimonial = ({ src, name, job, text }) => {
  return (
    <div className="testimonial p-[15px] w-[calc(100%/3)] bg-[#fff] boxshadow rounded-[6px] min-h-[170px]">
      <div className="testimonial-info flex items-center  gap-[10px] pb-[20px]">
        <div className="avt">
          <img
            className="object-cover w-[46px] rounded-full"
            src={src}
            alt=""
          />
        </div>
        <div className="profile">
          <span className="name block text-[14px] font-[500]">{name}</span>
          <span className="job text-[12px] text-[#d0d0d0]">{job}</span>
        </div>
      </div>
      <div className="testimonial-content text-[12.5px] text-[#989898] leading-5">
        <hr className="mb-[10px]" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
