import React from "react";
import '../styles/ProductCard.css'
const ProductCard = ({ name, img }) => {
  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-img" />
      <h3 className="product-title">{name}</h3>
    </div>
  );
};

export default ProductCard;
