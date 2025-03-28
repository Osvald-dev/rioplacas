import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto.jsx";
import Home from "./pages/Home.jsx";
import Productos from "./pages/Productos.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Servicios from "./pages/Servicios.jsx";
import Categoria from "./pages/Categoria.jsx";
import WhatsAppButton from "./components/WhatsappButton.jsx";

const App = () => {
  return (
    <HashRouter>  {/* Usa HashRouter en vez de BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:categoria" element={<Categoria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
      <WhatsAppButton />
    </HashRouter>
  );
};

export default App;
