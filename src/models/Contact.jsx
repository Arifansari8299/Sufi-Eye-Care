import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "917068453216";

const Contact = ({ closeForm }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, service, date, message } = form;
    if (!firstName || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    const text = [
      "Hello Sufi Eye Care! 👋",
      "",
      "I'd like to book an appointment.",
      "",
      `*Name:* ${firstName} ${lastName}`,
      `*Phone:* ${phone}`,
      `*Service:* ${service || "General Checkup"}`,
      `*Preferred Date:* ${date || "Flexible"}`,
      `*Message:* ${message || "N/A"}`,
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    closeForm();
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">

        {/* Close button */}
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
          aria-label="Close"
        >
          <AiOutlineClose size={22} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <FaWhatsapp size={40} className="text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Book Appointment</h1>
          <p className="text-sm text-gray-500 mt-1">
            Fill in your details and we'll connect you on WhatsApp instantly.
          </p>
        </div>

        <form onSubmit={handleWhatsApp} className="space-y-4">
          {/* Name */}
          <div className="flex gap-3">
            <input
              className="w-1/2 py-3 px-3 bg-[#d5f2ec] rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-400"
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              className="w-1/2 py-3 px-3 bg-[#d5f2ec] rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-400"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <input
            className="w-full py-3 px-3 bg-[#d5f2ec] rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-400"
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            required
          />

          {/* Service */}
          <select
            className="w-full py-3 px-3 bg-[#d5f2ec] rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-400 text-gray-600"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option value="Eye Checkup">Eye Checkup</option>
            <option value="Prescription Glasses">Prescription Glasses</option>
            <option value="Contact Lenses">Contact Lenses</option>
            <option value="Eye Medicines">Eye Medicines</option>
            <option value="General Consultation">General Consultation</option>
          </select>

          {/* Preferred Date */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-1">
            </label>
            <input
              className="w-full py-3 px-3 bg-[#d5f2ec] rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-400 text-gray-700"
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              min={todayStr}
            />
          </div>

          {/* Message */}
          <textarea
            className="w-full py-3 px-3 bg-[#d5f2ec] rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-400 resize-none"
            name="message"
            placeholder="Any additional message (optional)"
            rows={3}
            value={form.message}
            onChange={handleChange}
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            <FaWhatsapp size={20} />
            Book via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
