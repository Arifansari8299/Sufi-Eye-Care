import React from "react";
import Button from "../layouts/Button";
import { FaPrescriptionBottleAlt, FaEye, FaGlasses } from "react-icons/fa";
import ServicesCard from "../layouts/ServicesCard";
import { motion } from "framer-motion";

const Services = () => {
  const icon1 = <FaPrescriptionBottleAlt size={35} className="text-blue-700" />;
  const icon2 = <FaEye size={35} className="text-blue-700" />;
  const icon3 = <FaGlasses size={35} className="text-blue-700" />;

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50 text-gray-900 px-5 py-24">
      {/* Container max width and center for large screens */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:flex-row justify-between gap-8"
        >
          <div className="flex-1 min-w-[300px]">
            <h1 className="text-4xl font-bold text-center lg:text-left text-blue-900">
              Our Services
            </h1>
            <p className="mt-2 text-center lg:text-left text-gray-600 max-w-lg mx-auto lg:mx-0">
              We provide complete eye care services including exams, lenses, and medicines.
            </p>
          </div>
          <div className="mt-4 lg:mt-0 flex-shrink-0">
            <Button title="Explore Services" />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 pt-14">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="flex-1 min-w-[250px]"
          >
            <ServicesCard
              icon={icon1}
              title="Medicines"
              description="We offer prescribed and general eye medicines for your eye health and vision care."
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="flex-1 min-w-[250px]"
          >
            <ServicesCard
              icon={icon2}
              title="Eye Checkup"
              description="Comprehensive eye examinations by Dr. Asfak with latest optometric tools and tests."
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7 }}
            className="flex-1 min-w-[250px]"
          >
            <ServicesCard
              icon={icon3}
              title="Lenses & Frames"
              description="Stylish frames and advanced lenses customized to your vision needs and comfort."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
