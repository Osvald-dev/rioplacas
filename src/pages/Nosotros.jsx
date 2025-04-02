import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { FaArrowLeft } from "react-icons/fa";
import img1 from '../assets/img/e.webp'
import "../styles/Nosotros.css";
import Footer from '../components/Footer'

function Nosotros() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-icon" /> Volver
      </button>
      <div className="nosotros-container">
          <h1>Sobre Nosotros</h1>
          <p>Tenemos una amplia gama de productos para construcción en seco, MDF, MDP, Maderas y mucho mas..</p>
       

        {/* Imágenes estilo blog */}
        <section className="nosotros-imagenes">
          <img src={img1} alt="Rio Placas S.A.S - sucursal Rio Cuarto Cordoba" className="imagen-nosotros" />
          <img src="/ruta-a-imagen2.jpg" alt="Equipo trabajando" className="imagen-nosotros" />
        </section>

        {/* Texto de presentación */}
        <section className="nosotros-texto">
          <h2>Nuestra Historia</h2>
          <p>
          En <strong>Río Placas S.A.S</strong>, nos destacamos por nuestra innovación y compromiso, 
          brindando soluciones en construcción en seco, MDP, MDF y tableros de madera para todo tipo de proyectos.
        </p>
        <p>
          Contamos con una amplia variedad de productos, incluyendo tableros de pino, fenólicos, placas OSB, 
          placas de yeso, aislantes, pinturas, pegamentos, cementos y varillados de madera, garantizando calidad, 
          eficiencia y durabilidad.
        </p>
        <p>
          Junto a nuestros proveedores líderes, reafirmamos nuestro compromiso con la <strong>eco-arquitectura</strong>, 
          apostando por materiales sustentables y un futuro más responsable.
        </p>
        <p>
          Todo lo que necesitás en un solo lugar: materiales para mueblería, construcción en seco, herramientas, bulonería y más.
          Calidad, variedad y asesoramiento experto para hacer realidad tus proyectos. <strong>¡Hablános hoy y encontrá lo que buscás!</strong>
        </p>
        <p className="ubicacion">
          📍 Nos encontramos en <strong>Río Cuarto, Córdoba</strong>. Av. Amadeo Sabattini 3564.  
          🚚 Realizamos envíos a todo el país con logística segura y confiable.
        </p>
        </section>
      </div>

      <Footer />
    </>
  )
}


export default Nosotros;

