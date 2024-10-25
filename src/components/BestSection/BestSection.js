import React from "react";
import { motion } from "framer-motion";
import "./BestSection.css";

function BestSection() {
  return (
    <motion.section
      className="best-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>🔥Somos los mejores del mercado🔥</h2>
      <p>
        Nos destacamos por nuestra amplia experiencia, servicio de calidad y una selección incomparable de vehículos para todas tus necesidades. Confía en nosotros para llevarte a tu próximo destino con estilo y seguridad.
      </p>
    </motion.section>
  );
}

export default BestSection;
