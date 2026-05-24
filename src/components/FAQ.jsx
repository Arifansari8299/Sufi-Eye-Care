import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    q: "How often should I get an eye checkup?",
    a: "Adults should get a comprehensive eye exam every 1–2 years. If you wear glasses or contacts, or have a family history of eye disease, annual checkups are recommended.",
  },
  {
    q: "Can children get eye exams at Sufi Eye Care?",
    a: "Yes! We provide eye exams for all ages including children. Early detection of vision problems in kids is crucial for their learning and development.",
  },
  {
    q: "How do I book an appointment?",
    a: "The easiest way is to click the 'Book Appointment' button and send us a WhatsApp message. You can also call us directly at +91 70684 53216.",
  },
  {
    q: "Do you provide contact lenses?",
    a: "Yes, we offer daily, monthly, and colored contact lenses. Our optometrist will examine your eyes and recommend the best type for your lifestyle and vision needs.",
  },
  {
    q: "What should I bring to my eye exam?",
    a: "Bring your current glasses or contact lenses if you have them, any previous prescriptions, and a list of medications you're taking. That's all you need!",
  },
  {
    q: "How long does an eye exam take?",
    a: "A standard comprehensive eye exam typically takes 30–45 minutes. If additional tests are needed, it may take a bit longer.",
  },
  {
    q: "Do you sell prescription glasses on the same day?",
    a: "Yes! We have a wide selection of frames in stock. Simple prescriptions can often be ready the same day or within 24 hours.",
  },
];

const FAQItem = ({ q, a, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
    >
      <span className="font-medium text-gray-800 text-sm sm:text-base pr-4">{q}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className="flex-shrink-0 text-teal-600"
      >
        <FaChevronDown size={16} />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-white py-20 px-5 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-2">
          Got Questions?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
          Everything you need to know about eye care and our clinic.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            q={faq.q}
            a={faq.a}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm mb-4">Still have questions? We're happy to help.</p>
        <a
          href="https://wa.me/917068453216?text=Hello%20Sufi%20Eye%20Care!%20I%20have%20a%20question."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md text-sm"
        >
          <FaWhatsapp size={18} />
          Ask Us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default FAQ;
