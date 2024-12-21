// /api/sendEmail.js
import nodemailer from 'nodemailer';
import validator from 'validator';

function setCorsHeaders(res) {
    // Autorisez seulement votre domaine, ou * pour autoriser tout
    res.setHeader('Access-Control-Allow-Origin', 'https://www.hotelcapdambre.fr');
    // Vous pouvez mettre '*' si vous voulez autoriser plusieurs origines
    // res.setHeader('Access-Control-Allow-Origin', '*');
  
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
}

const sendEmail = async (req, res) => {
    // Autorisez les requêtes provenant de votre domaine
    setCorsHeaders(res);

    // Gérer la requête OPTIONS (pré-vol)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Destructuration et sanitisation des entrées
    let { nom, prenom, email, telephone, dateArrivee, dateDepart, heureDepart, nbPersonnes, commentaires } = req.body;

    // Sanitisation des entrées
    nom = validator.escape(nom);
    prenom = validator.escape(prenom);
    email = validator.escape(email);
    telephone = validator.escape(telephone);
    dateArrivee = validator.escape(dateArrivee);
    dateDepart = validator.escape(dateDepart);
    heureDepart = validator.escape(heureDepart);
    nbPersonnes = validator.escape(nbPersonnes);
    commentaires = validator.escape(commentaires);

    // Vérifications supplémentaires (par exemple, format de l'email)
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Transporter pour Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'login',
            user: process.env.USER_EMAIL,
            pass: process.env.PASSWORD_EMAIL
        }
    });

    const mailOptions = {
        from: process.env.USER_EMAIL,
        replyTo: email,
        to: 'emachma@aol.com',
        subject: 'Nouvelle demande de réservation',
        text: `Détails de la réservation:
        Nom: ${nom}
        Prénom: ${prenom}
        Email: ${email}
        Téléphone: ${telephone}
        Date d'arrivée: ${dateArrivee}
        Date de départ: ${dateDepart}
        Heure de départ: ${heureDepart}
        Nombre de personnes: ${nbPersonnes}
        Commentaires: ${commentaires}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Failed to send email', error);
        res.status(500).send(`Failed to send email: ${error.message}`);
    }
};

export default sendEmail;
