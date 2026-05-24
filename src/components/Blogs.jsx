import React from "react";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import { motion } from "framer-motion";

const blogs = [
  {
    img: img1,
    headline: "10 Daily Habits for Healthy Eyes",
    description:
      "Discover simple daily habits that can help you maintain sharp vision and prevent eye strain.",
    tag: "Eye Health",
  },
  {
    img: img2,
    headline: "Blue Light: How Screens Affect Your Vision",
    description:
      "Learn how prolonged screen time can impact your eyes and what you can do to protect them.",
    tag: "Digital Eye Strain",
  },
  {
    img: img3,
    headline: "Foods That Boost Eye Health Naturally",
    description:
      "Explore nutritious foods rich in vitamins that support clear vision and eye strength.",
    tag: "Nutrition",
  },
  {
    img: img4,
    headline: "How to Prevent Dry Eyes During Screen Use",
    description:
      "Dry eyes are common with digital use. Get practical tips to keep your eyes moist and comfortable.",
    tag: "Tips",
  },
  {
    img: img5,
    headline: "Importance of Annual Eye Checkups",
    description:
      "Regular eye exams can detect early signs of diseases and keep your vision in top condition.",
    tag: "Checkup",
  },
  {
    img: img6,
    headline: "Protecting Your Eyes from UV Rays",
    description:
      "Find out why sunglasses aren't just stylish — they're essential for your long-term eye health.",
    tag: "UV Protection",
  },
];

const Blogs = () => {
  return (
    <div className="bg-gray-50 py-20 px-5 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-2">
          Eye Care Tips
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">Eye Care Blog</h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
          Learn how to take care of your eyes with our latest articles and expert tips.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.headline}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform cursor-pointer"
          >
            <img
              src={blog.img}
              alt={blog.headline}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-2">
              <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                {blog.tag}
              </span>
              <h2 className="text-base font-bold text-gray-800 leading-snug pt-1">
                {blog.headline}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">{blog.description}</p>
              <p className="text-teal-600 text-sm font-medium hover:text-teal-800 transition cursor-pointer pt-1">
                Read more →
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
