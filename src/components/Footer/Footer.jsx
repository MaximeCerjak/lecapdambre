// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({language}) => {
  if(language === "fr") {
    return (
      <footer style={{ padding: '20px', marginTop: '20px', background: '#feaf4c' }}>
        <div id="contact">
          <p>Le Cap d'Ambre - 29 rue de l'estacade, 85550, La Barre de Monts</p>
          <p>Téléphone: 0251685205 - Email: emachma@aol.com</p>
        </div>
        <div>
          <p>&copy; 2021 Le Cap d'Ambre. Tous droits réservés.</p>
        </div>
        <p>___</p>
        <div>
          <Link to="/cgv">Conditions générales de vente(CGV)</Link>
        </div>
      </footer>
    );
  } else {
    return (
      <footer style={{ padding: '20px', marginTop: '20px', background: '#feaf4c' }}>
        <div id="contact">
          <p>Le Cap d'Ambre - 29 rue de l'estacade, 85550, La Barre de Monts</p>
          <p>Phone: 0251685205 - Email: emachma@aol.com</p>
        </div>
        <div>
          <p>&copy; 2021 Le Cap d'Ambre. All rights reserved.</p>
        </div>
        <p>___</p>
        <div>
          <Link to="/cgv">General Terms and Conditions(GTC)</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
