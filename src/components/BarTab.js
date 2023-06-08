import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";

const BarTab = () => {
  const [active, setActive] = useState("");
  return (
    <header>
      <nav className="bar flex justify-between bg-[#fff] items-center rounded-[6px] boxshadow ">
        <ul className="bar-tabs flex h-[70px] items-center">
          <li className="tab bg-[#ffc500] py-0 px-[14px] rounded-l-[6px] mr-[10px] text-center h-full w-full items-center">
            <NavLink
              to="/home"
              className="home-btn hometab py-0 px-[10px] text-[14px] font-bold leading-[70px]"
            >
              <i className="fa fa-home text-[21px]"></i>
            </NavLink>
          </li>
          <li className="tab resumetab">
            <NavLink
              to="/resume"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-[#ffc500]" : ""
                } home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover;`;
              }}
            >
              RESUME
            </NavLink>
          </li>
          <li className="tab portfoliotab">
            <NavLink
              to="/portfolio"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-[#ffc500]" : ""
                } home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover;`;
              }}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li className="tab blogtab">
            <NavLink
              to="/blog"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-[#ffc500]" : ""
                } home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover;`;
              }}
            >
              BLOG
            </NavLink>
          </li>
          <li className="tab contacttab">
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-[#ffc500]" : ""
                } home-btn hometab py-0 px-[10px] text-[14px] font-bold hover:text-[#ffc500] transitionhover;`;
              }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className="bar-dynamic flex items-center justify-around py-0 px-[15px] ">
          <SocialIcon></SocialIcon>

          <a
            href=""
            className="site-btn hover:bg-[#f0ac02] icon site-btn icon mx-auto block bg-[#ffc500] font-[500] text-[14px] rounded-[50px] leading-[35px] text-left py-[1px] pr-[6px] pl-[19px]"
          >
            Hire Me
            <i aria-hidden="true" className="fa fa-paper-plane"></i>
          </a>

          <a className="bars-icon block text-[12px] mr-[10px] leading-[71px] pl-[21px] hidden">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default BarTab;
