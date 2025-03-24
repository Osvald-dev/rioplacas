import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css"; 
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5493584247937"
      className="whatsapp-button-fixed"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
