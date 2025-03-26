import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import CarouselSecondary from "../components/CarouselSecondary";
import SliderMarcas from '../components/SliderMarcas';
import FAQ from "../components/FAQ";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="overlay">
          <h2 className="h2-home">RIO PLACAS S.A.S</h2>
          <div className="hero-buttons">
            <Link to="/productos" className="btn-productos">Ver Productos</Link>
            <a href="/public/catalogo.pdf" download className="btn-pdf">Descargar Catálogo</a>
          </div>
        </div>
      </section>

      <section className="about">
        <h3 className="h-acerca">Materiales para construcción en seco y MDF</h3>
        <p className="p-acerca">
          A la ciudad de Río Cuarto llega Rio Placas S.A.S, sinónimo de innovación y compromiso.
          <br /><br />
          Brindamos soluciones de alta calidad en materiales para construcción en seco y MDF, asegurando el máximo confort y diseño en cada proyecto.
          <br /><br />
          Nuestra amplia cartera de productos está pensada para responder a las necesidades de cada cliente, garantizando eficiencia y durabilidad.
          <br /><br />
          Junto a nuestros proveedores líderes, reafirmamos nuestro compromiso con la eco-arquitectura, apostando por materiales sustentables y un futuro más responsable.
        </p>
      </section>
      <CarouselSecondary />
      <Carousel />

      <section className="features">
        <h3>Trabajamos con</h3>
        <SliderMarcas />
      </section>

      <section className="contact">
        <FAQ />
        <p>Todo lo que necesitás en un solo lugar: materiales para mueblería, construcción en seco, maderas, herramientas, bulonería y mucho más. Calidad, variedad y asesoramiento experto para hacer realidad tus proyectos. ¡Hablános hoy y encontrá lo que buscás!</p>
      </section>
      
      <Footer />
    </>
  );
};

export default Home;
