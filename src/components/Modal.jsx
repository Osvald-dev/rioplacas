import React from "react";
import "../styles/Modal.css";

const Modal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h3>{product.name}</h3>
        <p>Tenemos stock disponible para tu producto.</p>
        <a href="https://wa.me/5493584247937" className="modal-whatsapp-button">
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Modal;
