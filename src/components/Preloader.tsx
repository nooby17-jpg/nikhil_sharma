"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }

        const jump = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col justify-end p-6 md:p-12 cursor-wait"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex justify-between items-end border-t border-[#333] pt-4">
             <span className="font-mono text-xs text-gray-500 uppercase">System Initializing...</span>
             <motion.h1 
                className="font-oswald text-[15vw] leading-none font-bold text-[#ededed]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
             >
                {count}%
             </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}