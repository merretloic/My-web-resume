import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
      >
        Welcome to My Web Resume.
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Discover my journey and experiences.
      </motion.p>
    </section>
  );
};

export default HeroSection;
