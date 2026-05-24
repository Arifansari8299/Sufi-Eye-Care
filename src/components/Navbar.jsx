import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenu(false);
  const openForm = () => { setShowForm(true); setMenu(false); };
  const closeForm = () => setShowForm(false);

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About Us", to: "about" },
    { label: "Services", to: "services" },
    { label: "Doctors", to: "doctors" },
    { label: "Blog", to: "blog" },
  ];

  return (
    <div className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <div className="flex flex-row justify-between items-center py-4 md:px-32 px-5 bg-backgroundColor text-white">
        {/* Logo */}
        <Link to="home" spy smooth duration={500} className="cursor-pointer">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
            👁️ Sufi Eye Care
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-row items-center text-base font-medium gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy smooth duration={500}
              activeClass="text-hoverColor"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={openForm}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
          >
            <FaWhatsapp size={18} />
            Book Appointment
          </button>
          <button
            onClick={openForm}
            className="bg-brightColor text-white px-4 py-2 rounded-lg hover:bg-hoverColor transition duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            {menu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-full font-semibold text-xl text-center pt-8 pb-6 gap-6 w-full transition-transform duration-300 shadow-xl`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy smooth duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer py-1"
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        <div className="flex flex-col items-center gap-3 pt-2">
          <button
            onClick={openForm}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            <FaWhatsapp size={20} />
            Book Appointment
          </button>
          <button
            onClick={openForm}
            className="bg-brightColor text-white px-6 py-3 rounded-lg hover:bg-hoverColor transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      {showForm && <Contact closeForm={closeForm} />}
    </div>
  );
};

export default Navbar;
