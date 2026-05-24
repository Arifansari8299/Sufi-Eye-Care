import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import StatsSection from "./components/StatsSection";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import FAQ from "./components/FAQ";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { FaWhatsapp } from "react-icons/fa";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <StatsSection />
        <div id="services"><Services /></div>
        <WhyUs />
        <div id="doctors"><Doctors /></div>
        <Testimonials />
        <div id="blog"><Blogs /></div>
        <FAQ />
        <div id="map"><MapSection /></div>
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917068453216?text=Hello%20Sufi%20Eye%20Care!%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
        title="Book Appointment on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      <ScrollToTop />
    </div>
  );
};

export default App;
