import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaInstagram, FaFacebookF } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from '../assets/img/logo.png'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="left-section">
                {/* Botón de menú hamburguesa */}
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Logo */}
            <Link to="/">
                <img className="logo" src={logo} alt="Rio Placas Melaminas, construcción en Seco" />
            </Link>

            {/* Redes sociales */}
            <div className="social-icons">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaFacebookF /></a>
            </div>

            {/* Menú de navegación */}
            <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>



                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;