// src/components/FormulaireReservation.js
import React, { useState } from 'react';
import './Reservation.css';


const Reservation = ({language}) => {
  // Exemple d'utilisation de useState pour gérer l'état du formulaire
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [dateArrivee, setDateArrivee] = useState('');
  const [dateDepart, setDateDepart] = useState('');
  const [heureDepart, setHeureDepart] = useState('');
  const [nbPersonnes, setNbPersonnes] = useState('');
  const [commentaires, setCommentaires] = useState('');

  const data = {
    nom,
    prenom,
    email,
    telephone,
    dateArrivee,
    dateDepart,
    heureDepart,
    nbPersonnes,
    commentaires,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://lecapdambre.vercel.app/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Something went wrong');
      const result = await response.json();
      console.log('Email sent successfully:', result);
      alert('Votre demande de réservation a été envoyée avec succès !');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Échec de l\'envoi de la demande.');
    }
  };
  

  if(language === "fr") {
    return (
      <section className="resa-container" id="formulaireReservation" style={{ padding: '20px' }}>
        <h2>Demande de Réservation</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
          </label>
          <label>
            Prénom:
            <input type="text" onChange={(e) => setPrenom(e.target.value)}/>
          </label>
          <label>
            Email:
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            Téléphone:
            <input type="tel" onChange={(e) => setTelephone(e.target.value)}/>
          </label>
          <label>
            Date d'arrivée:
            <input type="date" onChange={(e) => setDateArrivee(e.target.value)}/>
          </label>
          <label>
            Date de départ:
            <input type="date" onChange={(e) => setDateDepart(e.target.value)}/>
          </label>
          <label>
            Heure de départ estimée (avant 11h):
            <input 
              type="time"
              min="00:00"
              max="11:00"
              onChange={(e) => setHeureDepart(e.target.value)}
            />
          </label>
          <label>
            Nombre de personnes:
            <input type="number" onChange={(e) => setNbPersonnes(e.target.value)}/>
          </label>
          <label>
            Commentaires:
            <textarea onChange={(e) => setCommentaires(e.target.value)} />
          </label>
          <button className="btn-submit" type="submit">Envoyer</button>
        </form>
      </section>
    );
  } else {
    return (
      <section className="resa-container" id="formulaireReservation" style={{ padding: '20px' }}>
        <h2>Reservation Request</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Last Name:
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
          </label>
          <label>
            First Name:
            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            Phone:
            <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
          </label>
          <label>
            Arrival Date:
            <input type="date" value={dateArrivee} onChange={(e) => setDateArrivee(e.target.value)}/>
          </label>
          <label>
            Departure Date:
            <input type="date" value={dateDepart} onChange={(e) => setDateDepart(e.target.value)}/>
          </label>
          <label>
            Estimated departure time (before 11am):
            <input 
              type="time"
              min="00:00"
              max="11:00"
              value={heureDepart}
              onChange={(e) => setHeureDepart(e.target.value)}
            />
          </label>
          <label>
            Number of people:
            <input type="number" value={nbPersonnes} onChange={(e) => setNbPersonnes(e.target.value)}/>
          </label>
          <label>
            Comments:
            <textarea value={commentaires} onChange={(e) => setCommentaires(e.target.value)} />
          </label>
          <button className="btn-submit" type="submit">Send</button>
        </form>
      </section>
    );
  }
  
};

export default Reservation;
