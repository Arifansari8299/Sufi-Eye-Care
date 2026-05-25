import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaDirections } from "react-icons/fa";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={18} />,
    label: "Our Address",
    value: "Hareram Chauraha, Pratappur 244703\nDeoria, Uttar Pradesh",
    color: "bg-blue-500",
  },
  {
    icon: <FaPhone size={16} />,
    label: "Phone Number",
    value: "+91 70684 53216",
    href: "tel:+917068453216",
    color: "bg-teal-500",
  },
  {
    icon: <FaEnvelope size={16} />,
    label: "Email Address",
    value: "support@sufi-care.com",
    href: "mailto:support@sufi-care.com",
    color: "bg-purple-500",
  },
  {
    icon: <FaClock size={16} />,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 4:00 PM",
    color: "bg-orange-500",
  },
];

const MapSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-8 lg:px-32">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-2">
          Find Us
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Visit Our Clinic</h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-md mx-auto">
          We are conveniently located and always ready to serve you.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
      >
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col gap-2 border border-gray-100"
          >
            <div className={`${item.color} w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-xs sm:text-sm text-gray-700 hover:text-teal-600 transition font-medium whitespace-pre-line break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-xs sm:text-sm text-gray-700 font-medium whitespace-pre-line">
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
      >
        <div className="w-full h-64 sm:h-96 lg:h-[420px]">
          <iframe
            title="Sufi Eye Care Location"
          // src="https://www.google.com/maps/embed?pb=!4v1749133636801!6m8!1m7!1s06MOYRJoUs8aFFJyANYT4A!2m2!1d26.3136901230133!2d84.15651910146681!3f34.625981024991646!4f11.432604254120406!5f0.7820865974627469"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.717992419934!2d84.15668184785068!3d26.31442227677601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993adb4812904a5%3A0x18267580e4ccb618!2sSufi%20Eye%20Care!5e0!3m2!1sen!2sin!4v1779702015204!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA bar below map — no overlap */}
        <div className="bg-white px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-teal-600 p-2.5 rounded-xl text-white flex-shrink-0">
              <FaMapMarkerAlt size={16} />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">Sufi Eye Care</p>
              <p className="text-gray-400 text-xs">Hareram Chauraha, Pratappur, Deoria, UP</p>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <a
              href="https://maps.google.com/?q=26.3136901230133,84.15651910146681"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition duration-300"
            >
              <FaDirections size={13} />
              Directions
            </a>
            <a
              href="https://wa.me/917068453216?text=Hello%20Sufi%20Eye%20Care!%20I%20need%20directions%20to%20your%20clinic."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition duration-300"
            >
              <FaWhatsapp size={13} />
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default MapSection;
