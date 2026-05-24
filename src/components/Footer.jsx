import React from "react";
import { Link } from "react-scroll";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-backgroundColor text-white rounded-t-3xl mt-8">
      <div className="flex flex-col md:flex-row justify-between gap-8 p-8 md:px-32 px-5">
        {/* Brand */}
        <div className="w-full md:w-1/4">
          <h1 className="font-bold text-xl pb-3">👁️ Sufi Eye Care</h1>
          <p className="text-sm text-white/80 leading-relaxed">
            A trusted eye clinic offering professional eye checkups, vision
            testing, prescription glasses, lenses, and eye medicines. Your
            vision is our priority.
          </p>
          <a
            href="https://wa.me/917068453216"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-300"
          >
            <FaWhatsapp size={16} />
            WhatsApp Us
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="font-semibold text-lg pb-3">Quick Links</h1>
          <nav className="flex flex-col gap-2 text-sm text-white/80">
            {[
              { label: "Home", to: "home" },
              { label: "About Us", to: "about" },
              { label: "Services", to: "services" },
              { label: "Doctors", to: "doctors" },
              { label: "Blog", to: "blog" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy smooth duration={500}
                className="hover:text-hoverColor transition-all cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h1 className="font-semibold text-lg pb-3">Services</h1>
          <nav className="flex flex-col gap-2 text-sm text-white/80">
            {["Eye Checkup", "Prescription Glasses", "Contact Lenses", "Eye Medicines", "Vision Testing"].map((s) => (
              <Link key={s} to="services" spy smooth duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
                {s}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-lg pb-3">Contact Us</h1>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-hoverColor" size={14} />
              <span>Hareram Chauraha, Pratappur 244703, Deoria, Uttar Pradesh</span>
            </div>
            <a href="tel:+917068453216" className="flex items-center gap-2 hover:text-hoverColor transition">
              <FaPhone size={13} className="text-hoverColor" />
              +91 70684 53216
            </a>
            <a href="mailto:support@sufi-care.com" className="flex items-center gap-2 hover:text-hoverColor transition">
              <FaEnvelope size={13} className="text-hoverColor" />
              support@sufi-care.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70 px-5">
        &copy; {new Date().getFullYear()} Sufi Eye Care. Developed by{" "}
        <span className="text-hoverColor font-medium">Developer Arif Ansari</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
