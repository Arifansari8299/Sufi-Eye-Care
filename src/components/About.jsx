import React from "react";
import img from "../assets/img/Asfak1.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-10 bg-white text-gray-800">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-3/4 space-y-5"
      >
        <h1 className="text-4xl font-bold text-center lg:text-start text-blue-900">
          About <span className="text-yellow-500">Sufi Eye Care</span>
        </h1>

        <p className="text-justify lg:text-start text-lg leading-relaxed">
          At <span className="font-semibold text-blue-800">Sufi Eye Care</span>,
          we believe that your eyes deserve the best. We are dedicated to
          providing high-quality eye checkups, personalized eyeglass
          prescriptions, and advanced lenses tailored to your vision needs.
        </p>

        <p className="text-justify lg:text-start text-lg leading-relaxed">
          Our clinic offers a wide range of services including comprehensive eye
          exams, designer frames, powered glasses, contact lenses, and essential
          eye medications. We ensure every patient receives expert attention and
          clarity they can count on.
        </p>

        <p className="text-justify lg:text-start text-lg leading-relaxed">
          Led by <span className="font-semibold text-blue-700">Dr. Asfak</span>,
          an experienced optometrist with years of clinical expertise, we
          combine modern equipment with compassionate care to help you see
          better and live brighter.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-3/4"
      >
        <img
          src={img}
          alt="Eye Clinic"
          className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
        />
      </motion.div>
    </div>
  );
};

export default About;
