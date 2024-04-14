// src/components/NosChambres.js
import React, { useState } from 'react';
import RoomCard from './RoomCard';
import { rooms, rooms_en } from '../../data/rooms';
import roompic from '../../data/roompicImport';
import './RoomCard.css';

const Rooms = ({language}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  if(language === "fr") {
    const nextRoom = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
    };
  
    const previousRoom = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length);
    };
  
    return (
      <section id="nosChambres" style={{ padding: '20px' }}>
          <h2>Nos Chambres</h2>
          <div className="room-display">
            {!showAll && (
              <button className="nav-button prev-button" onClick={previousRoom}>&laquo;</button>
            )}
            <div className={showAll ? "room-container rooms-list" : 'room-container'}>
              {showAll ? (
                rooms.map(room => <RoomCard language={language} key={room.id} room={room} pics={roompic} />)
              ) : (
                <RoomCard language={language} room={rooms[currentIndex]} pics={roompic} />
              )}
            </div>
            {!showAll && (
              <button className="nav-button next-button" onClick={nextRoom}>&raquo;</button>
            )}
          </div>
          <button onClick={() => setShowAll(!showAll)} className="toggle-rooms">
            {showAll ? 'Voir moins' : 'Voir toutes'}
          </button>
        </section>
      );
    } else {
      const nextRoom = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms_en.length);
      };
    
      const previousRoom = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + rooms_en.length) % rooms_en.length);
      };
    
      return (
        <section id="nosChambres" style={{ padding: '20px' }}>
          <h2>Our Rooms</h2>
          <div className="room-display">
            {!showAll && (
              <button className="nav-button prev-button" onClick={previousRoom}>&laquo;</button>
            )}
            <div className={showAll ? "room-container rooms-list" : 'room-container'}>
              {showAll ? (
                rooms_en.map(room => <RoomCard language={language} key={room.id} room={room} pics={roompic} />)
              ) : (
                <RoomCard language={language} room={rooms_en[currentIndex]} pics={roompic} />
              )}
            </div>
            {!showAll && (
              <button className="nav-button next-button" onClick={nextRoom}>&raquo;</button>
            )}
          </div>
          <button onClick={() => setShowAll(!showAll)} className="toggle-rooms">
            {showAll ? 'Show less' : 'Show all'}
          </button>
        </section>
      );
    }
      
}

export default Rooms;
