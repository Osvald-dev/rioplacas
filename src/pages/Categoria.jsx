import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importamos useNavigate
import SubCategoryCard from "../components/SubCategoryCard.jsx";
import Modal from "../components/Modal";
import NavBar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import productsData from "../data/productsData";
import { FaArrowLeft } from "react-icons/fa"; // Importamos el ícono de flecha
import "../styles/Categories.css"; // Asegúrate de importar los estilos

const Categoria = () => {
  const { categoria } = useParams();
  const navigate = useNavigate(); // Hook para navegar atrás
  const categoryData = productsData[categoria];

  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (!categoryData) {
    return <p className="error-message">No hay productos disponibles</p>;
  }

  return (
    <>
    <NavBar/>
    
    <div className="categoria-container">
      {/* Botón de volver atrás */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-icon" /> Volver
      </button>
      
      <h2 className="title">{categoryData.title}</h2>
      <div className="sub-category-container">
     
        {categoryData.subcategories.map((sub, index) => (
          
          <SubCategoryCard
            key={index}
            name={sub.name}
            img={sub.img}
            onClick={() => setSelectedSubcategory(sub)}
          />
          
          
        ))}
       
      </div>
      
      {selectedSubcategory && (
  <Modal 
    product={selectedSubcategory} 
    onClose={() => setSelectedSubcategory(null)} 
  />
)}

     
    </div>
    
    <Footer/>
    </>
  );
};

export default Categoria;
