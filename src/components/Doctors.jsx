import React from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import asfak from "../assets/img/Asfak3.png";
// import irfan from "../assets/img/Irfan.png";
// import irshad from "../assets/img/Irshad.png";

const doctor = {
  img: asfak,
  name: "Dr. Asfak Ansari",
  specialties: "Optometrist",
  desc: "Expert in comprehensive eye exams, vision testing, and prescription glasses.",
};

// Commented out — will be added back when more doctors join
// const otherDoctors = [
//   { img: irfan, name: "Dr. Irfan Alam", specialties: "Physiotherapist", desc: "Specialized in physical therapy and rehabilitation for overall patient wellness." },
//   { img: irshad, name: "Drx. Irshad Alam", specialties: "Pharmacist", desc: "Experienced pharmacist providing expert guidance on eye medicines and drops." },
// ];

const expertise = [
  "Comprehensive Eye Examinations",
  "Vision & Refraction Testing",
  "Prescription Glasses & Lenses",
  "Contact Lens Fitting",
  "Eye Disease Screening",
  "Pediatric Eye Care",
];

const Doctors = () => {
  return (
    <div className="bg-white py-20 px-5 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-2">
          Meet The Doctor
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Our Expert</h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          Experienced, caring, and dedicated to your vision health.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">
        {/* Doctor Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-2/5"
        >
          <div className="relative group rounded-2xl overflow-hidden shadow-xl">
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-lg font-bold">{doctor.name}</p>
              <p className="text-teal-300 text-sm font-medium">{doctor.specialties}</p>
            </div>
          </div>
        </motion.div>

        {/* Doctor Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-3/5 space-y-5"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">{doctor.name}</h3>
            <p className="text-teal-600 font-semibold mt-1">{doctor.specialties}</p>
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {doctor.desc} With years of hands-on clinical experience, Dr. Asfak is
            committed to delivering accurate diagnoses and personalized care for
            every patient — from children to seniors.
          </p>

          <div>
            <p className="font-semibold text-gray-800 mb-3">Areas of Expertise</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {expertise.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0" size={14} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <a
            href={`https://wa.me/917068453216?text=${encodeURIComponent("Hello! I'd like to book an appointment with Dr. Asfak Ansari.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md text-sm sm:text-base"
          >
            <FaWhatsapp size={20} />
            Book Appointment with Dr. Asfak
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Doctors;
