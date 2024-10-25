// src/Gallery.js

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Gallery.css";

function Gallery({ vehicles }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      className="gallery"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <h2>Galería de Vehículos</h2>
      <div className="gallery-grid">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img src={vehicle.image} alt={vehicle.name} />
            <h3>{vehicle.name}</h3>
            <p>{vehicle.price}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Gallery;
