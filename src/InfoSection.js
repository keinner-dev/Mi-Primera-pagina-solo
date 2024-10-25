// src/InfoSection.js

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./InfoSection.css";

function InfoSection({ title, description, image }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      className="info-section"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="info-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="info-image">
        <img src={image} alt={title} />
      </div>
    </motion.section>
  );
}

export default InfoSection;
