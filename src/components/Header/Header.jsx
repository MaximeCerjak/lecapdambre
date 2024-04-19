import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = ({language, setLanguage}) => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={shrink ? 'small' : ''}>
      <div className="language">
        <button
          onClick={() => setLanguage('fr')}
          className={language === 'fr' ? 'active btn-l' : 'btn-l'}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'active btn-r' : 'btn-r'}
        >
          EN
        </button>
      </div>
      <h1>Hôtel Le Cap d'Ambre</h1>
      <nav className='navBar'>
        <Link to="gallery" smooth={true} duration={500}>{language === "fr" ? "Accueil" : "Home"}</Link>
        <Link to="nosServices" smooth={true} duration={500}>Services</Link>
        <Link to="nosChambres" smooth={true} duration={500}>{language === "fr" ? "Chambres" : "Rooms"}</Link>
        <Link to="formulaireReservation" smooth={true} duration={500}>{language === "fr" ? "Réservation" : "Schedule"}</Link>
        <Link to="contact" smooth={true} duration={500}>Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;
