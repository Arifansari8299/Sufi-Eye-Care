import React from "react";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
// import img6 from "../assets/img/blog6.jpg";
import { motion } from "framer-motion";

const blogs = [
  {
    img: img1,
    tag: "Eye Health",
    headline: "The 20-20-20 Rule: Save Your Eyes from Screen Strain",
    description:
      "Spending hours on screens? Every 20 minutes, look at something 20 feet away for 20 seconds. This simple habit dramatically reduces digital eye strain, headaches, and blurry vision caused by prolonged screen use.",
    readTime: "3 min read",
  },
  {
    img: img2,
    tag: "Vision Care",
    headline: "Warning Signs You Need an Eye Checkup Right Now",
    description:
      "Blurry vision, frequent headaches, squinting, or seeing halos around lights — these are your eyes asking for help. Don't ignore early warning signs. A timely eye exam can catch serious conditions before they worsen.",
    readTime: "4 min read",
  },
  {
    img: img3,
    tag: "Nutrition",
    headline: "Best Foods for Sharp Vision and Strong Eye Health",
    description:
      "Carrots, spinach, eggs, fish, and citrus fruits are packed with Vitamin A, lutein, omega-3s, and antioxidants that protect your retina, reduce the risk of cataracts, and keep your vision sharp as you age.",
    readTime: "4 min read",
  },
  {
    img: img4,
    tag: "Eye Care Tips",
    headline: "How to Choose the Right Glasses for Your Face & Vision",
    description:
      "Single vision, bifocal, or progressive? Round, square, or oval frames? The right glasses depend on your prescription, lifestyle, and face shape. Here's everything you need to know before picking your next pair.",
    readTime: "5 min read",
  },
  {
    img: img5,
    tag: "Children's Eyes",
    headline: "Why Your Child's Eye Health Matters More Than You Think",
    description:
      "80% of learning is visual. Undetected vision problems in children can affect reading, writing, and school performance. Learn the signs of poor eyesight in kids and why an early eye exam is one of the best gifts you can give them.",
    readTime: "4 min read",
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
          Expert tips and insights to help you protect, maintain, and improve your vision.
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
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform cursor-pointer group"
          >
            <div className="overflow-hidden">
              <img
                src={blog.img}
                alt={blog.headline}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {blog.tag}
                </span>
                <span className="text-xs text-gray-400">{blog.readTime}</span>
              </div>
              <h2 className="text-base font-bold text-gray-800 leading-snug pt-1">
                {blog.headline}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">{blog.description}</p>
              <p className="text-teal-600 text-sm font-semibold hover:text-teal-800 transition cursor-pointer pt-1">
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
