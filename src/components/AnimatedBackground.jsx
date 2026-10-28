import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#101522] pointer-events-none">
      {/* Subtle Top Glow */}
      <motion.div
        className="absolute top-[-20%] left-[25%] w-[50vw] h-[30vw] rounded-full bg-brand-blue/10 blur-[150px]"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
