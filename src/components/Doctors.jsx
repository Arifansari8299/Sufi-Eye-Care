import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const slider = useRef(null);

  const data = [
    {
      img: "/src/assets/img/Asfak1.png",
      name: "Dr. Asfak Ansari",
      specialties: "Optometrist",
    },
    {
      img: "/src/assets/img/Irfan.png",
      name: "Dr. Irfan Alam",
      specialties: "Physiotherapist",
    },
    {
      img: "/src/assets/img/Irshad.png",
      name: "Drx. Irshad Alam",
      specialties: "Pharmacist",
    },
    
    {
      img: "/src/assets/img/Asfak1.png",
      name: "Dr. Asfak Ansari",
      specialties: "Optometrist",
    },
  ];

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 lg:px-24 pt-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Header */}
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Our Doctors</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Meet our experienced and caring team of professionals.
          </p>
        </div>
        <div className="flex gap-4 mt-4 lg:mt-0">
          <button
            onClick={() => slider.current.slickPrev()}
            className="bg-teal-100 hover:bg-teal-300 text-teal-900 p-3 rounded-full shadow transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={() => slider.current.slickNext()}
            className="bg-teal-100 hover:bg-teal-300 text-teal-900 p-3 rounded-full shadow transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={slider} {...settings}>
        {data.map((doctor, index) => (
          <div key={index} className="px-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
              <div className="relative group">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center py-4 px-3">
                <h2 className="text-xl font-semibold">{doctor.name}</h2>
                <p className="text-teal-500 mt-1">{doctor.specialties}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctors;
