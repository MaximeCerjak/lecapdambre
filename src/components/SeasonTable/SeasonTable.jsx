
import React from 'react';
import { BS, MS, HS, closeDate } from '../../data/const'; // Assurez-vous que les chemins sont corrects
import './SeasonTable.css';

const SeasonTable = ({language}) => {
  const formatDate = (dateStr, language) => {
    const [day, month] = dateStr.split('/');
    let monthNames = [];
    let suffix = "";
    const dayInt = parseInt(day, 10);

    if(language === "fr") {
      monthNames = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
      ];
      suffix = dayInt === 1 ? 'er' : '';
    } else {
      monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      suffix = dayInt === 1 ? 'st' : dayInt === 2 ? 'nd' : dayInt === 3 ? 'rd' : 'th';
    }

    const monthIndex = parseInt(month, 10) - 1;
    return `${dayInt}${suffix} ${monthNames[monthIndex]}`;
  };

  const formatDateRange = (range, language) => {
    const [start, end] = range.split('-');
    if(language === "fr") {
      return `du ${formatDate(start, language)} au ${formatDate(end, language)}`;
    } else {
      return `${formatDate(start, language)} to ${formatDate(end, language)}`;
    }
  };

  return (
    <div className='season-container'>
      <h3>{language === "fr" ? "Informations sur les saisons:" : "Season Information:"}</h3>
      <table>
        <thead>
          <tr>
            <th>{language === "fr" ? "Saison" : "Season"}</th>
            <th>{language === "fr" ? "Dates" : "Dates"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bs'>
            <td>{language === "fr" ? "Basse Saison (BS)" : "Low Season (BS)"}</td>
            <td>{BS.map(range => formatDateRange(range, language)).join(', ')}</td>
          </tr>
          <tr className='ms'>
            <td>{language === "fr" ? "Moyenne Saison (MS)" : "Mid Season (MS)"}</td>
            <td>{MS.map(range => formatDateRange(range, language)).join(', ')}</td>
          </tr>
          <tr className='hs'>
            <td>{language === "fr" ? "Haute Saison (HS)" : "High Season (HS)"}</td>
            <td>{HS.map(range => formatDateRange(range, language)).join(', ')}</td>
          </tr>
          <tr className='close'>
            <td>{language === "fr" ? "Fermeture" : "Closed"}</td>
            <td>{closeDate.map(range => formatDateRange(range, language)).join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SeasonTable;
