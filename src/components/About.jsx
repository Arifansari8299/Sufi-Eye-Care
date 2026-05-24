import React from "react";
import img from "../assets/img/Asfak1.png";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const highlights = [
  "Comprehensive eye exams with modern equipment",
  "Prescription glasses & designer frames",
  "Contact lenses & advanced optical solutions",
  "Eye medicines & drops prescribed by experts",
  "Compassionate, patient-first care",
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 pb-16 lg:pt-20 gap-10 bg-white text-gray-800">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 space-y-5"
      >
        <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase">
          Who We Are
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 leading-tight">
          About <span className="text-yellow-500">Sufi Eye Care</span>
        </h1>

        <p className="text-base leading-relaxed text-gray-600">
          At <span className="font-semibold text-blue-800">Sufi Eye Care</span>,
          we believe your eyes deserve the best. We are dedicated to providing
          high-quality eye checkups, personalized eyeglass prescriptions, and
          advanced lenses tailored to your vision needs.
        </p>

        <p className="text-base leading-relaxed text-gray-600">
          Led by <span className="font-semibold text-blue-700">Dr. Asfak Ansari</span>,
          an experienced optometrist, we combine modern equipment with
          compassionate care to help you see better and live brighter.
        </p>

        <ul className="space-y-2 pt-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <FaCheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" size={16} />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-5/12"
      >
        <img
          src={img}
          alt="Dr. Asfak Ansari - Sufi Eye Care"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition duration-300"
        />
      </motion.div>
    </div>
  );
};

export default About;
