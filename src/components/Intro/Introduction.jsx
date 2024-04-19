// src/components/Introduction.js
import React from 'react';

const Introduction = ({language}) => {

  if(language === 'fr') {
    return (
      <section id="introduction" style={{ padding: '20px', width: '70%', margin: 'auto' }}>
      <div>
        <h2>Bienvenue au Cap d'Ambre</h2>
        <p>
          Bienvenue au Cap d'Ambre, un établissement intime et charmant comprenant 14 chambres. Notre hôtel est idéalement situé pour les voyageurs désireux d'explorer les trésors de la Vendée, depuis les grandes plages de sable jusqu'aux salines mystérieuses, en passant par les îles emblématiques de Noirmoutier et d'Yeu, accessibles facilement grâce à l'embarcadère situé à proximité.
        </p>
        <p>
          L'Hôtel Le Cap d'Ambre se distingue par son architecture singulière et ses espaces accueillants, offrant à nos hôtes un cadre exotique et une ambiance reposante. Que vous veniez pour la randonnée, la découverte de la faune et de la flore de la région, ou simplement pour vous ressourcer au son des vagues, notre hôtel est le point de départ idéal pour une immersion complète dans la beauté sauvage de la Vendée.
        </p>
      </div>
    </section>
    );
  } else {
    return (
      <section id="introduction" style={{ padding: '20px', width: '70%', margin: 'auto' }}>
      <div>
        <h2>Welcome to Cap d'Ambre</h2>
        <p>
          Welcome to Cap d'Ambre, an intimate and charming establishment comprising 14 rooms. Our hotel is ideally located for travelers eager to explore the treasures of the Vendée, from the large sandy beaches to the mysterious salt marshes, including the emblematic islands of Noirmoutier and Yeu, easily accessible thanks to the nearby pier.
        </p>
        <p>
          Hotel Le Cap d'Ambre stands out for its unique architecture and welcoming spaces, offering our guests an exotic setting and a relaxing atmosphere. Whether you come for surfing, hiking, discovering the region's wildlife and flora, or simply to recharge your batteries to the sound of the waves, our hotel is the perfect starting point for a complete immersion in the wild beauty of the Vendée.
        </p>
      </div>
    </section>
    );
  }
};

export default Introduction;
