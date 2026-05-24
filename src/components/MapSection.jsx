import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-teal-600" size={20} />,
    label: "Address",
    value: "Hareram Chauraha, Pratappur 244703, Deoria, Uttar Pradesh",
  },
  {
    icon: <FaPhone className="text-teal-600" size={18} />,
    label: "Phone",
    value: "+91 70684 53216",
    href: "tel:+917068453216",
  },
  {
    icon: <FaEnvelope className="text-teal-600" size={18} />,
    label: "Email",
    value: "support@sufi-care.com",
    href: "mailto:support@sufi-care.com",
  },
  {
    icon: <FaClock className="text-teal-600" size={18} />,
    label: "Hours",
    value: "Mon – Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 4:00 PM",
  },
];

const MapSection = () => {
  return (
    <div className="bg-white py-16 px-5 lg:px-32">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-2">
          Find Us
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Visit Our Clinic</h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          We are conveniently located and ready to serve you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 shadow-sm"
            >
              <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">{item.icon}</div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-gray-700 hover:text-teal-600 transition font-medium">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-700 font-medium whitespace-pre-line">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/3 h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            title="Sufi Eye Care Location"
            src="https://www.google.com/maps/embed?pb=!4v1749133636801!6m8!1m7!1s06MOYRJoUs8aFFJyANYT4A!2m2!1d26.3136901230133!2d84.15651910146681!3f34.625981024991646!4f11.432604254120406!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
