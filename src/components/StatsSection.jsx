import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaUsers, FaCalendarCheck, FaAward, FaSmile } from "react-icons/fa";

const stats = [
  { icon: <FaUsers size={28} className="text-yellow-300" />, value: 500, suffix: "+", label: "Happy Patients" },
  { icon: <FaCalendarCheck size={28} className="text-yellow-300" />, value: 1200, suffix: "+", label: "Appointments Done" },
  { icon: <FaAward size={28} className="text-yellow-300" />, value: 5, suffix: "+", label: "Years of Excellence" },
  { icon: <FaSmile size={28} className="text-yellow-300" />, value: 98, suffix: "%", label: "Patient Satisfaction" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-800 py-16 px-5 lg:px-32">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="bg-white/20 p-4 rounded-full">{stat.icon}</div>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-white/80 text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
