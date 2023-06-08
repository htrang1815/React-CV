import React from "react";
import SectionTitle from "../../components/SectionTitle";
import BlogItem from "./BlogItem";
import Button from "../../components/Button";

const BlogContent = () => {
  return (
    <div id="blog" className="resume rounded-lg bg-[#fff] mt-[45px]">
      <section className="pt-0 px-[15px] pr-[30px] pb-[30px]">
        <SectionTitle
          title={"Blog Posts"}
          className={"mt-[30px] mb-[15px] ml-[15px]"}
        ></SectionTitle>
        <div className="wrapper flex flex-row justify-between bg-[#fcfcfc]">
          <div className="column w-[calc(100%/3)]">
            <BlogItem
              src={
                "https://html.tavonline.co/mat/default/images/blogs/blog-6.jpg"
              }
              category={"General"}
              title={"See my current workspace"}
              text={
                "The first thing to remember about success is that it is a process."
              }
              date={"8 Nov 17"}
            ></BlogItem>
            <BlogItem
              src={
                "https://html.tavonline.co/mat/default/images/blogs/blog-4.jpg"
              }
              category={"Photography"}
              title={"Can you work everywhere?"}
              text={
                " Drops of rain could be heard hitting the pane, which made him feel quite sad.."
              }
              date={"28 Sep 17"}
            ></BlogItem>
          </div>
          <div className="column w-[calc(100%/3)]">
            <BlogItem
              src={
                "https://html.tavonline.co/mat/default/images/blogs/blog-2.jpg"
              }
              category={"Web Design"}
              title={"How to become a web designer?"}
              text={
                "He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering."
              }
              date={"27 Oct 17"}
            ></BlogItem>
            <BlogItem
              src={
                "https://html.tavonline.co/mat/default/images/blogs/blog-6.jpg"
              }
              category={"Work Space"}
              title={"I'm starting a new project"}
              text={
                "The first thing to remember about success is that it is a process..."
              }
              date={"1 Jul 17"}
            ></BlogItem>
          </div>
          <div className="column w-[calc(100%/3)]">
            <BlogItem
              src={
                "https://html.tavonline.co/mat/default/images/blogs/blog-3.jpg"
              }
              category={"User İnterface"}
              title={"Why is it better to work nights?"}
              text={
                "Legs, and only stopped when he began to feel a mild, dull pain there that he had never felt."
              }
              date={"19 Oct 17"}
            ></BlogItem>
            <BlogItem
              src={
                "https://html.tavonline.co/mat/default/images/blogs/blog-3.jpg"
              }
              category={"Other"}
              title={"How to connect your imac or macBook"}
              text={
                "However hard he threw himself onto his right, he always rolled back to where he was."
              }
              date={"19 Agu 17"}
            ></BlogItem>
          </div>
        </div>
        <Button text={"Load more (3)"}></Button>
      </section>
    </div>
  );
};

export default BlogContent;
