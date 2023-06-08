import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import ResumePage from "./page/resume/ResumePage";
import PortfolioPage from "./page/portfolio/PortfolioPage";
import BlogPage from "./page/blog/BlogPage";
import ContactPage from "./page/contact/ContactPage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/resume" element={<ResumePage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
