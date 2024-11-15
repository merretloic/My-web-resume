import React from "react";
//import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline";
import SportsSection from "./components/SportsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <HeroSection />
      <Timeline />
      <SportsSection />
      <Footer />
    </div>
  );
}

export default App;
