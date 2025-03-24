import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import SliderMarcas from '../components/SliderMarcas';
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="overlay">
          <h2 className="h2-home">RIO PLACAS S.A.S</h2>
          <p className="p-home">Sinónimo de innovación y compromiso.</p>
        </div>
      </section>

      <section className="about">
        <h3 className="h-acerca">Materiales para construcción en seco y MDF</h3>
        <p className="p-acerca">A la ciudad de Río Cuarto llega Rio Placas S.A.S, sinónimo de innovación y compromiso.

Brindamos soluciones de alta calidad en materiales para construcción en seco y MDF, asegurando el máximo confort y diseño en cada proyecto.

Nuestra amplia cartera de productos está pensada para responder a las necesidades de cada cliente, garantizando eficiencia y durabilidad.

Junto a nuestros proveedores líderes, reafirmamos nuestro compromiso con la eco-arquitectura, apostando por materiales sustentables y un futuro más responsable.</p>
      </section>
      <Carousel />

      <section className="features">
        <h3>Trabajamos con</h3>
        <SliderMarcas />
      </section>

      <section className="contact">
        <h3>Contacto</h3>
        <p>Escríbenos para más información.</p>
        <button className="contact-btn">Contáctanos</button>
      </section>
<Footer />
     
    </>
  );
};

export default Home;
