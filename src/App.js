import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import Gallery from "./Gallery";
import Footer from "./Footer";
import BestSection from "./BestSection";

function App() {
  const carInfo1 = {
    title: "Modelos Deportivos",
    description:
      "Descubre nuestros modelos deportivos con motores de alta potencia, diseño aerodinámico y la última tecnología para el rendimiento.",
    image: "https://cdn.buttercms.com/5xmGcJLIQHihjmMAVqVK",
  };

  const carInfo2 = {
    title: "Modelos Eléctricos",
    description:
      "Nuestros vehículos eléctricos ofrecen eficiencia, cero emisiones y un gran alcance para una conducción sostenible y moderna.",
    image: "https://www.mgmotorguatemala.com/wp-content/uploads/2023/11/MG-ZS-WHITE-1024x625.png",
  };

  const vehicles = [
    { name: "Deportivo XYZ", price: "$50,000", image: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_55247b2a36b74b1c9f6761c7b4bdefe9.jpg" },
    { name: "SUV Eléctrico ABC", price: "$45,000", image: "https://www.mgmotorguatemala.com/wp-content/uploads/2023/11/MG-ZS-WHITE-1024x625.png" },
    { name: "Sedán Clásico 123", price: "$30,000", image: "https://images.kavak.services/images/17043/smart-forfour-prime2017-frontal-lateral-piloto-cercana-1575565300856.jpg" },
    { name: "Camioneta Off-road", price: "$55,000", image: "https://images.kavak.services/images/158753/EXTERIOR-frontSidePilotNear-1642210134315.jpeg" },
    { name: "nissan sentra", price: "$20,000", image: "https://di-uploads-pod35.dealerinspire.com/newtonnissanofgallatin/uploads/2021/02/2021-Nissan-Sentra-S-Model-Left.jpg" },
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <InfoSection {...carInfo1} />
      <InfoSection {...carInfo2} />
      <Gallery vehicles={vehicles} />
      <BestSection />
      <Footer />
    </div>
  );
}

export default App;

