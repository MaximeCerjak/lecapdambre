// /api/sendEmail.js
import nodemailer from 'nodemailer';

const sendEmail = async (req, res) => {
    const { nom, prenom, email, telephone, dateArrivee, dateDepart, heureDepart, nbPersonnes, commentaires } = req.body;

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
        to: process.env.USER_EMAIL,
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
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Failed to send email', error);
        res.status(500).send(`Failed to send email for ${process.env.USER_EMAIL} and ${process.env.PASSWORD_EMAIL}: ${error.message}`);
    }
};

export default sendEmail;
