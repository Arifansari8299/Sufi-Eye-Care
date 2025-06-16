import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Eye Care Blog
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Learn how to take care of your eyes with our latest articles and expert tips.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard
            img={img1}
            headlines="10 Daily Habits for Healthy Eyes"
            description="Discover simple daily habits that can help you maintain sharp vision and prevent eye strain."
          />
          <BlogCard
            img={img2}
            headlines="Blue Light: How Screens Affect Your Vision"
            description="Learn how prolonged screen time can impact your eyes and what you can do to protect them."
          />
          <BlogCard
            img={img3}
            headlines="Foods That Boost Eye Health Naturally"
            description="Explore nutritious foods rich in vitamins that support clear vision and eye strength."
          />
          <BlogCard
            img={img4}
            headlines="How to Prevent Dry Eyes During Screen Use"
            description="Dry eyes are common with digital use. Get practical tips to keep your eyes moist and comfortable."
          />
          <BlogCard
            img={img5}
            headlines="Importance of Annual Eye Checkups"
            description="Regular eye exams can detect early signs of diseases and keep your vision in top condition."
          />
          <BlogCard
            img={img6}
            headlines="Protecting Your Eyes from UV Rays"
            description="Find out why sunglasses aren't just stylish—they're essential for your long-term eye health."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
