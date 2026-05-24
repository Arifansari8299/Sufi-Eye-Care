import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Contact from "../models/Contact";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="min-h-screen flex items-center lg:px-32 px-5 text-white bg-[url('assets/img/thumbnail.png')] bg-no-repeat bg-cover bg-center relative">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full lg:w-3/5 space-y-6 mt-16 sm:mt-20">
          <p className="text-sm sm:text-base font-medium tracking-widest text-yellow-300 uppercase">
            Welcome to
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
            <span className="text-yellow-400">Sufi Eye Care</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl">
            Your trusted eye clinic for accurate eye checkups, custom lenses,
            premium eyeglasses, and complete eye care solutions. See the world
            clearer — with care that matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-lg text-sm sm:text-base"
            >
              <FaWhatsapp size={20} />
              Book Appointment on WhatsApp
            </button>
            <a
              href="tel:+917068453216"
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 border border-white text-white font-semibold px-6 py-3 rounded-xl transition duration-300 text-sm sm:text-base"
            >
              <FaPhoneAlt size={16} />
              Call Us Now
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { value: "500+", label: "Happy Patients" },
              { value: "5+", label: "Years Experience" },
              { value: "3+", label: "Expert Doctors" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-yellow-400">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && <Contact closeForm={() => setShowForm(false)} />}
    </>
  );
};

export default Home;
