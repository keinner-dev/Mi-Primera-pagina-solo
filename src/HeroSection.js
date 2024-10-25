// src/HeroSection.js

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HeroSection.css";

function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <h1>¡Promoción Especial de Otoño!</h1>
        <p>Descuentos de hasta el 30% en modelos seleccionados. ¡No te lo pierdas!</p>
        <button className="hero-button">Ver Modelos</button>
      </div>
    </motion.section>
  );
}

export default HeroSection;
