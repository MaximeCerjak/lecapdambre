// src/components/NosServices.js
import React from 'react';
import './Services.css';
// free services icons
import martini from '../../images/icons/martini.svg';
import wifi from '../../images/icons/wifi.svg';
import microwave from '../../images/icons/microwave.svg';
import trees from '../../images/icons/trees.svg';
// supplemental services icons
import dog from '../../images/icons/dog.svg';
import baby from '../../images/icons/baby.svg';
import croissant from '../../images/icons/croissant.svg';

import {services} from '../../data/const'

const Services = ({language}) => {
  if(language === "fr") {
    return (
      <section id="nosServices" style={{ padding: '20px' }}>
        <h3>Nos Services gratuits</h3>
        <div className="services">
          <div className="service">
            <img src={wifi} alt="wifi" />
            <p>Wifi</p>
          </div>
          <div className="service">
            <img src={microwave} alt="microwave" />
            <p>Micro-ondes</p>
          </div>
          <div className="service">
            <img src={trees} alt="trees" />
            <p>Jardin</p>
          </div>
        </div>
        <h3>Nos Services supplémentaires</h3>
        <div className="services">
          <div className="service">
            <img src={dog} alt="dog" />
            <p>Animaux</p>
            <p>{services[2].price}€/nuit</p>
          </div>
          <div className="service">
            <img src={baby} alt="baby" />
            <p>Lits pour bébés</p>
            <p>{services[1].price}€/nuit</p>
          </div>
          <div className="service">
            <img src={croissant} alt="croissant" />
            <p>Petit-déjeuner</p>
            <p>{services[0].price}€/pers</p>
          </div>
          <div className="service">
            <img src={martini} alt="martini" />
            <p>Bar</p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="nosServices" style={{ padding: '20px' }}>
        <h3>Our free services</h3>
        <div className="services">
          <div className="service">
            <img src={wifi} alt="wifi" />
            <p>Wifi</p>
          </div>
          <div className="service">
            <img src={microwave} alt="microwave" />
            <p>Microwave</p>
          </div>
          <div className="service">
            <img src={trees} alt="trees" />
            <p>Garden</p>
          </div>
        </div>
        <h3>Our supplemental services</h3>
        <div className="services">
          <div className="service">
            <img src={dog} alt="dog" />
            <p>Pets</p>
            <p>{services[2].price}€/night</p>
          </div>
          <div className="service">
            <img src={baby} alt="baby" />
            <p>Baby beds</p>
            <p>{services[1].price}€/night</p>
          </div>
          <div className="service">
            <img src={croissant} alt="croissant" />
            <p>Breakfast</p>
            <p>{services[0].price}€/pers</p>
          </div>
          <div className="service">
            <img src={martini} alt="martini" />
            <p>Bar</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
