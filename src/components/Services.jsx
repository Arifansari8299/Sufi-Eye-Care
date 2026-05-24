import React, { useState } from "react";
import {
  FaPrescriptionBottleAlt,
  FaEye,
  FaGlasses,
  FaWhatsapp,
  FaUserMd,
  FaSun,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Contact from "../models/Contact";

const services = [
  {
    icon: <FaEye size={32} className="text-teal-600" />,
    title: "Eye Checkup",
    description:
      "Comprehensive eye examinations by Dr. Asfak using the latest optometric tools and diagnostic tests.",
  },
  {
    icon: <FaGlasses size={32} className="text-teal-600" />,
    title: "Lenses & Frames",
    description:
      "Stylish frames and advanced lenses — single vision, bifocal, progressive — customized to your needs.",
  },
  {
    icon: <FaPrescriptionBottleAlt size={32} className="text-teal-600" />,
    title: "Eye Medicines",
    description:
      "Prescribed and general eye medicines, drops, and supplements for your eye health and vision care.",
  },
  {
    icon: <FaUserMd size={32} className="text-teal-600" />,
    title: "Contact Lenses",
    description:
      "Daily, monthly, and colored contact lenses fitted and prescribed by our expert optometrist.",
  },
  {
    icon: <FaSun size={32} className="text-teal-600" />,
    title: "Sunglasses",
    description:
      "UV-protected premium sunglasses to shield your eyes from harmful rays and keep your vision safe.",
  },
  {
    icon: <FaEye size={32} className="text-teal-600" />,
    title: "Vision Testing",
    description:
      "Accurate vision testing for all ages — children, adults, and seniors — with precise prescriptions.",
  },
];

const Services = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="bg-gray-50 py-20 px-5 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-2">
            What We Offer
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Our Services
          </h1>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Complete eye care under one roof — from checkups to glasses, lenses,
            and medicines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-4"
            >
              <div className="bg-teal-50 p-4 rounded-full">{service.icon}</div>
              <h2 className="text-lg font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-md text-sm sm:text-base"
          >
            <FaWhatsapp size={20} />
            Book an Appointment
          </button>
        </div>
      </div>

      {showForm && <Contact closeForm={() => setShowForm(false)} />}
    </>
  );
};

export default Services;
