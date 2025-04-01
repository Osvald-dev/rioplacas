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
        <h1 className="h-acerca">Materiales para construcción en seco, mobiliario y más, con la calidad que tu proyecto necesita.</h1>
        <p className="p-acerca">
        En Río Cuarto, Rio Placas S.A.S es sinónimo de innovación y compromiso, ofreciendo soluciones en construcción en seco, MDP, MDF y tableros de madera para todo tipo de proyectos.
          <br /><br />
          Contamos con una amplia variedad de productos, incluyendo tableros de pino, fenólicos, placas OSB, placas de yeso, aislantes, pinturas, pegamentos, cementos y varillados de madera, garantizando calidad, eficiencia y durabilidad.
          <br /><br />
          Nuestra amplia cartera de productos está pensada para responder a las necesidades de cada cliente.
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
