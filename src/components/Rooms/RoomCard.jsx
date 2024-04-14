import React from 'react';
import shower from '../../images/icons/shower.svg';
import bath from '../../images/icons/bath.svg';
import userround from '../../images/icons/user-round.svg';
import nopicbed from '../../images/roompics/nopic_bed (1).png'; 
import facade from '../../images/icons/facade.svg';
import {translations} from '../../data/const';
import './RoomCard.css';


const renderRoomCard = (language, room, roomImages) => {
  const formatBedInfo = (bedStr, language) => {
    const bedCounts = { single: 0, double: 0 };
    bedStr.split(' + ').forEach(bed => {
      const [count, type] = bed.split('x');
      if (type === '1') {
        bedCounts.single += parseInt(count, 10);
      } else if (type === '2') {
        bedCounts.double += parseInt(count, 10);
      }
    });
  
    const t = translations[language];
    return `${bedCounts.single} ${t.singleBed} et ${bedCounts.double} ${t.doubleBed}`;
  };

  const t = translations[language];
  return (
    <div className="room-card">
      <div className="room-images">
        {roomImages ? (
          roomImages.room_pic.map((img, index) => (
            <img key={index} src={img} alt={roomImages.room_alt[index] || t.beds} />
          ))
        ) : (
          <img src={nopicbed} alt="Unavailable" />
        )}
      </div>
      <div className="room-details">
        <h2>{room.title}</h2>
        <p style={{fontWeight: "bold"}}>
          {room.capacity} {t.person} <img src={userround} alt="capacity" />
        </p>
        <p style={{fontWeight: "bold"}}>{formatBedInfo(room.bed, language)}</p>
        <p style={{fontWeight: "bold"}}>{t.bathroom}: {room.bathroom === 'douche' ? t.douche : t.bain} <img src={room.bathroom === 'douche' ? shower : bath} alt={t.bathroom} /></p>
        {room.terrace && <p style={{fontWeight: "bold"}}>{t.withTerrace} <img src={facade} alt="terrace" /></p>}
        <div className="room-prices">
          <span className='price-bs'>{t.lowSeason}: {room.bs_price}€</span>
          <span className='price-ms'>{t.midSeason}: {room.ms_price}€</span>
          <span className='price-hs'>{t.highSeason}: {room.hs_price}€</span>
        </div>
      </div>
    </div>
  );
};

const RoomCard = ({ language, room, pics }) => {
  const roomImages = pics.find(p => p.id === room.id);
  return renderRoomCard(language, room, roomImages);
};

export default RoomCard;



