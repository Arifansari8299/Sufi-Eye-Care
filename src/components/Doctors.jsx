import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import asfak from "../assets/img/Asfak3.png";
import irfan from "../assets/img/Irfan.png";
import irshad from "../assets/img/Irshad.png";

const doctors = [
  {
    img: asfak,
    name: "Dr. Asfak Ansari",
    specialties: "Optometrist",
    desc: "Expert in comprehensive eye exams, vision testing, and prescription glasses.",
  },
  {
    img: irfan,
    name: "Dr. Irfan Alam",
    specialties: "Physiotherapist",
    desc: "Specialized in physical therapy and rehabilitation for overall patient wellness.",
  },
  {
    img: irshad,
    name: "Drx. Irshad Alam",
    specialties: "Pharmacist",
    desc: "Experienced pharmacist providing expert guidance on eye medicines and drops.",
  },
];

const Doctors = () => {
  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white py-20 px-5 lg:px-32">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-1">
            Our Team
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">Our Doctors</h1>
          <p className="mt-2 text-gray-500 text-sm sm:text-base">
            Meet our experienced and caring team of professionals.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => slider.current.slickPrev()}
            className="bg-teal-100 hover:bg-teal-300 text-teal-900 p-3 rounded-full shadow transition"
            aria-label="Previous"
          >
            <FaArrowLeft size={18} />
          </button>
          <button
            onClick={() => slider.current.slickNext()}
            className="bg-teal-100 hover:bg-teal-300 text-teal-900 p-3 rounded-full shadow transition"
            aria-label="Next"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={slider} {...settings}>
        {doctors.map((doctor, index) => (
          <div key={index} className="px-3 pb-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform">
              <div className="relative group">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-72 sm:h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center py-5 px-4 space-y-1">
                <h2 className="text-lg font-bold text-gray-800">{doctor.name}</h2>
                <p className="text-teal-600 font-medium text-sm">{doctor.specialties}</p>
                <p className="text-gray-500 text-xs leading-relaxed pt-1">{doctor.desc}</p>
                <a
                  href={`https://wa.me/917068453216?text=${encodeURIComponent(`Hello! I'd like to book an appointment with ${doctor.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition duration-300"
                >
                  <FaWhatsapp size={14} />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctors;
