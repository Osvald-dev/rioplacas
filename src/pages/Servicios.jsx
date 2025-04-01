import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { FaArrowLeft } from "react-icons/fa";
import Servicios from '../components/Servicios';
import Footer from '../components/Footer'

function ServiciosPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-icon" /> Volver
      </button>
      <Servicios />

      <Footer />
    </>
  )
}


export default ServiciosPage