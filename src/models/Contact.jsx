import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp, FaUser, FaPhone, FaCalendarAlt, FaCommentAlt } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";

const WHATSAPP_NUMBER = "917068453216";

const inputClass =
  "w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition placeholder-gray-400 text-gray-700";

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
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    closeForm();
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-center bg-black/60 z-50">
      {/* Sheet slides up from bottom on mobile, centered modal on sm+ */}
      <div className="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl shadow-2xl relative max-h-[92vh] overflow-y-auto">

        {/* Top handle bar (mobile only) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Close button */}
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition z-10 bg-gray-100 hover:bg-red-50 p-1.5 rounded-full"
          aria-label="Close"
        >
          <AiOutlineClose size={16} />
        </button>

        <div className="px-5 pb-6 pt-3 sm:pt-6 sm:px-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-green-100 p-2.5 rounded-xl">
              <FaWhatsapp size={24} className="text-green-500" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800 leading-tight">Book Appointment</h1>
              <p className="text-xs text-gray-400">We'll confirm via WhatsApp</p>
            </div>
          </div>

          <form onSubmit={handleWhatsApp} className="space-y-3">

            {/* Name row */}
            <div className="flex gap-2">
              <div className="relative w-1/2">
                <FaUser size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className={`${inputClass} pl-8`}
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative w-1/2">
                <FaUser size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className={`${inputClass} pl-8`}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className={`${inputClass} pl-8`}
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Service */}
            <div className="relative">
              <MdMedicalServices size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                className={`${inputClass} pl-8 appearance-none`}
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
            </div>

            {/* Date picker */}
            <div
              className="relative w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm flex items-center gap-3 cursor-pointer hover:border-teal-400 transition"
              onClick={() =>
                document.getElementById("appt-date").showPicker?.() ||
                document.getElementById("appt-date").click()
              }
            >
              <FaCalendarAlt size={13} className="text-gray-400 flex-shrink-0" />
              <span className={form.date ? "text-gray-700 font-medium flex-1" : "text-gray-400 flex-1"}>
                {form.date
                  ? new Date(form.date + "T00:00:00").toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Choose Appointment Date"}
              </span>
              {form.date && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setForm({ ...form, date: "" }); }}
                  className="text-gray-300 hover:text-red-400 transition text-xs z-10"
                >
                  ✕
                </button>
              )}
              <input
                id="appt-date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={todayStr}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaCommentAlt size={12} className="absolute left-3 top-3.5 text-gray-400" />
              <textarea
                className={`${inputClass} pl-8 resize-none`}
                name="message"
                placeholder="Additional message (optional)"
                rows={2}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-500 active:bg-green-700 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl transition duration-300 text-sm shadow-md shadow-green-200 mt-1"
            >
              <FaWhatsapp size={18} />
              Book via WhatsApp
            </button>

            <p className="text-center text-xs text-gray-400 pb-1">
              Your details will be sent directly to our WhatsApp
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
