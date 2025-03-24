import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { FaArrowLeft } from "react-icons/fa";
import Footer from '../components/Footer'

function Servicios() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-icon" /> Volver
      </button>
      <div>Servicios</div>
      <Footer />
    </>
  )
}

export default Servicios