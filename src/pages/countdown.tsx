import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Countdown = () => {
  const targetDate = new Date("2025-03-17T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center  text-white p-5">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-center text-3xl md:text-5xl font-semibold">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-white text-black w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl shadow-2xl border-4 border-[#103B8C] transform hover:scale-110 transition duration-300 hover:shadow-purple-500/50 hover:border-purple-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-purple-500 blur-md opacity-0 hover:opacity-50 transition-opacity duration-300" />
                  {value}
                </motion.div>
              </AnimatePresence>
              <span className="text-sm md:text-lg capitalize mt-3 tracking-wide font-medium bg-white text-purple-600 px-3 py-1 rounded-lg shadow-md">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;