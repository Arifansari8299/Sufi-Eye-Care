import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Deoria, UP",
    rating: 5,
    review:
      "Dr. Asfak is very thorough and professional. Got my glasses prescription done in no time. The frames selection is also great. Highly recommended!",
    initials: "RS",
  },
  {
    name: "Priya Singh",
    location: "Pratappur, UP",
    rating: 5,
    review:
      "Best eye clinic in the area. Very affordable and the doctor explains everything clearly. My whole family visits Sufi Eye Care now.",
    initials: "PS",
  },
  {
    name: "Mohammad Arif",
    location: "Deoria, UP",
    rating: 5,
    review:
      "Excellent service! Booked my appointment on WhatsApp and got seen the same day. The contact lenses they recommended are perfect for me.",
    initials: "MA",
  },
  {
    name: "Sunita Devi",
    location: "Gorakhpur, UP",
    rating: 5,
    review:
      "Very caring staff and expert doctor. My eye problem was diagnosed quickly and the medicines worked well. Will definitely come back.",
    initials: "SD",
  },
  {
    name: "Vikram Yadav",
    location: "Deoria, UP",
    rating: 5,
    review:
      "I was having severe eye strain from screen use. Dr. Asfak gave me the right glasses and tips. My eyes feel so much better now!",
    initials: "VY",
  },
];

const Testimonials = () => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-50 py-20 px-5 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4"
      >
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-2">
            Patient Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            What Our Patients Say
          </h2>
          <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-md">
            Real experiences from real patients who trust Sufi Eye Care.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => slider.current.slickPrev()}
            className="bg-teal-100 hover:bg-teal-300 text-teal-900 p-3 rounded-full shadow transition"
            aria-label="Previous"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            onClick={() => slider.current.slickNext()}
            className="bg-teal-100 hover:bg-teal-300 text-teal-900 p-3 rounded-full shadow transition"
            aria-label="Next"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      <Slider ref={slider} {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-3 pb-6">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col gap-4">
              <FaQuoteLeft size={24} className="text-teal-200" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "{review.review}"
              </p>
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} size={14} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
