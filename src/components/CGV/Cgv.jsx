import React from "react";
import "./Cgv.css";
import { Link } from "react-router-dom";

const Cgv = ({language}) => {
    if(language === "fr") {
        return (
            <div className="cgv" style={{ padding: '20px', width: "80%", margin: "auto" }}>
                <Link to="/">Retour à l'accueil</Link>
                <h1>Conditions générales de vente (CGV) de l'hôtel Le cap d'ambre</h1>
                <h2>1. Introduction</h2>
                <p>
                    Ces conditions générales de vente s'appliquent à toutes les réservations conclues via le site internet, téléphone ou en personne pour Le cap d'ambre, situé au 29 rue de l'estacade, 85550, La Barre de Monts. En effectuant une réservation, le client reconnaît avoir pris connaissance des présentes CGV et les avoir acceptées.
                </p>
                <h2>2. Réservation</h2>
                <p>
                    Les demandes de réservations peuvent être effectuées sur notre site internet, par téléphone au 0251685205 ou directement à la réception de l'hôtel. Une réservation est considérée comme confirmée une fois que le client a reçu une confirmation écrite de notre part, par e-mail ou courrier.
                </p>
                <h2>3. Tarifs</h2>
                <p>
                    Les prix indiqués lors de la réservation incluent toutes les taxes et sont par nuitée. Ces prix peuvent être modifiés sans préavis, sauf pour les réservations déjà confirmées.
                </p>
                <h2>4. Paiements</h2>
                <p>
                    Nous acceptons les paiements par cartes bancaires, chéques vacances et liquide.
                </p>
                <h2>5. Annulation et Modification</h2>
                <p>
                    Toute demande de modification ou d'annulation de réservation doit être adressée par écrit. Les annulations effectuées plus de 24h avant la date d'arrivée prévue seront remboursées intégralement. Les annulations effectuées moins de 24h avant la date d'arrivée entraîneront la perte de l'acompte.
                </p>
                <h2>6. Séjour à l'Hôtel</h2>
                <p>
                    Les chambres sont disponibles à partir de 14h et doivent être libérées avant 11h. Les animaux de compagnie sont autorisés dans l'hôtel au prix d'un supplément/nuité. Il est interdit de fumer à l'intérieur de l'établissement. En cas de non-respect des règles de l'établissement, l'hôtel se réserve le droit de mettre fin au séjour sans remboursement.
                </p>
                <h2>7. Responsabilité</h2>
                <p>
                    L'hôtel Le cap d'ambre ne saurait être tenu responsable des dommages, pertes ou vols d'objets personnels dans les chambres ou les parties communes de l'hôtel. Le client est responsable de tout dommage causé à l'établissement ou à ses biens.
                </p>
                <h2>8. Données Personnelles</h2>
                <p>
                    Les informations personnelles collectées lors de la réservation seront utilisées uniquement à des fins de gestion de la réservation et ne seront pas transmises à des tiers. Conformément à la loi Informatique et Libertés, le client dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles.
                </p>
                <h2>9. Litiges</h2>
                <p>
                    Tout litige relatif à l'interprétation ou à l'exécution des présentes CGV sera soumis à la législation française et à la compétence exclusive des tribunaux du lieu de l'établissement.
                    En cas de litige, le client peut contacter l'hôtel Le cap d'ambre par téléphone au 0251685205 ou par e-mail à emachma@aol.com. 
                </p>
            </div>
        );
    } else {
        return (
            <div className="cgv" style={{ padding: '20px', width: "80%", margin: "auto" }}>
                <Link to="/">Back to home</Link>
                <h1>General Terms and Conditions (GTC) of the hotel Le cap d'ambre</h1>
                <h2>1. Introduction</h2>
                <p>
                    These general terms and conditions of sale apply to all reservations made via the website, telephone or in person for Le cap d'ambre, located at 29 rue de l'estacade, 85550, La Barre de Monts. By making a reservation, the customer acknowledges having read these GTC and accepted them.
                </p>
                <h2>2. Reservation</h2>
                <p>
                    Reservation requests can be made on our website, by phone at 0251685205 or directly at the hotel reception. A reservation is considered confirmed once the customer has received written confirmation from us, by e-mail or mail.
                </p>
                <h2>3. Rates</h2>
                <p>
                    The prices indicated at the time of booking include all taxes and are per night. These prices may be changed without notice, except for reservations already confirmed.
                </p>
                <h2>4. Payments</h2>
                <p>
                    We accept payments by credit cards, holiday vouchers and cash.
                </p>
                <h2>5. Cancellation and Modification</h2>
                <p>
                    Any request for modification or cancellation of a reservation must be made in writing. Cancellations made more than 24 hours before the scheduled arrival date will be refunded in full. Cancellations made less than 24 hours before the arrival date will result in the loss of the deposit.
                </p>
                <h2>6. Stay at the Hotel</h2>
                <p>
                    Rooms are available from 2pm and must be vacated by 11am. Pets are allowed in the hotel at an additional cost/night. Smoking is prohibited inside the establishment. In case of non-compliance with the establishment's rules, the hotel reserves the right to terminate the stay without refund.
                </p>
                <h2>7. Liability</h2>
                <p>
                    The hotel Le cap d'ambre cannot be held responsible for damages, losses or theft of personal belongings in the rooms or common areas of the hotel. The customer is responsible for any damage caused to the establishment or its property.
                </p>
                <h2>8. Personal Data</h2>
                <p>
                    The personal information collected during the reservation will be used only for the purpose of managing the reservation and will not be transmitted to third parties. In accordance with the Data Protection Act, the customer has the right to access, rectify and delete his personal data.
                </p>
                <h2>9. Disputes</h2>
                <p>
                    Any dispute relating to the interpretation or execution of these GTC will be subject to French law and the exclusive jurisdiction of the courts of the place of establishment.
                    In case of dispute, the customer can contact the hotel Le cap d'ambre by phone at 0251685205 or by e-mail at emachma@aol.com.
                </p>
            </div>
        );
    }
}

export default Cgv;
