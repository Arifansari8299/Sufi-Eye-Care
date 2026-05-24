import React from "react";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaRegClock,
  FaShieldAlt,
  FaSmile,
  FaMicroscope,
  FaHandHoldingHeart,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserMd size={30} className="text-teal-600" />,
    title: "Expert Optometrist",
    desc: "Dr. Asfak Ansari brings years of clinical experience and precision to every eye exam.",
  },
  {
    icon: <FaMicroscope size={30} className="text-teal-600" />,
    title: "Modern Equipment",
    desc: "We use the latest diagnostic tools to ensure accurate prescriptions and early detection.",
  },
  {
    icon: <FaRegClock size={30} className="text-teal-600" />,
    title: "Quick Appointments",
    desc: "Book instantly on WhatsApp and get seen without long waiting times.",
  },
  {
    icon: <FaShieldAlt size={30} className="text-teal-600" />,
    title: "Trusted & Reliable",
    desc: "Hundreds of satisfied patients trust us for their eye care needs every year.",
  },
  {
    icon: <FaSmile size={30} className="text-teal-600" />,
    title: "Patient-First Approach",
    desc: "We listen, care, and tailor every treatment plan to your unique vision needs.",
  },
  {
    icon: <FaHandHoldingHeart size={30} className="text-teal-600" />,
    title: "Affordable Care",
    desc: "Quality eye care shouldn't break the bank. We offer fair, transparent pricing.",
  },
];

const WhyUs = () => {
  return (
    <div className="bg-gradient-to-br from-teal-600 to-blue-900 py-20 px-5 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold tracking-widest text-yellow-300 uppercase mb-2">
          Our Strengths
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Why Choose Sufi Eye Care?
        </h2>
        <p className="mt-3 text-white/70 max-w-xl mx-auto text-sm sm:text-base">
          We combine expertise, technology, and compassion to deliver the best
          eye care experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/20 transition-all duration-300"
          >
            <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
