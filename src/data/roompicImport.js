import CH1 from '../images/roompics/CH 1.jpg';
import CH2 from '../images/roompics/CH 2.jpg';
import CH3 from '../images/roompics/CH 3.jpg';
import CH4recto from '../images/roompics/CH 4 R.jpg';
import CH4verso from '../images/roompics/CH 4 V.jpg';
import CH5 from '../images/roompics/CH 5.jpg';
import CH6 from '../images/roompics/CH 6.jpg';
import CH7 from '../images/roompics/CH 7.jpg';
import CH8 from '../images/roompics/CH 8.jpg';
import CH9 from '../images/roompics/CH 9.jpg';
import CH10ks from '../images/roompics/CH 10 k-size.jpg';
import CH10salon from '../images/roompics/CH 10 Sal.jpg';
import CH10single from '../images/roompics/CH 10 singlebed.jpg';
import CH11 from '../images/roompics/CH 11.jpg';
import CH12 from '../images/roompics/CH 12.jpg';
import SB1 from '../images/roompics/SB 1.jpg';
import SB3 from '../images/roompics/SB 3.jpg';
import SB10 from '../images/roompics/SB 10.jpg';
import SB11 from '../images/roompics/SB 11.jpg';
import SB12 from '../images/roompics/SB 12.jpg';
import T3 from '../images/roompics/T 3.jpg';
import T4 from '../images/roompics/T 4.jpg';
import T10 from '../images/roompics/T 10.jpg';
import T12 from '../images/roompics/T 12.jpg';

const roompic = [
    {
        id: 1,
        room_pic: [CH1],
        room_alt: ["Chambre 1"],
        sdb_pic: SB1,
        sdb_alt: "Salle de bain 1",
        terasse_pic: null,
        terasse_alt: null,
    },
    {
        id: 2,
        room_pic: [CH2],
        room_alt: ["Chambre 2"],
        sdb_pic: null,
        sdb_alt: null,
        terasse_pic: null,
        terasse_alt: null,
    },
    {
        id: 3,
        room_pic: [CH3],
        room_alt: ["Chambre 3"],
        sdb_pic: SB3,
        sdb_alt: "Salle de bain 3",
        terasse_pic: T3,
        terasse_alt: "Terasse 3",
    },
    {
        id: 4,
        room_pic: [CH4recto, CH4verso],
        room_alt: ["Chambre 4"],
        sdb_pic: null,
        sdb_alt: null,
        terasse_pic: T4,
        terasse_alt: "Terasse 4",
    },
    {
        id: 5,
        room_pic: [CH5],
        room_alt: ["Chambre 5"],
        sdb_pic: null,
        sdb_alt: null,
        terasse_pic: null,
        terasse_alt: null,
    },
    {
        id: 6,
        room_pic: [CH6],
        room_alt: ["Chambre 6"],
        sdb_pic: null,
        sdb_alt: null,
        terasse_pic: null,
        terasse_alt: null,
    },
    {
        id: 7,
        room_pic: [CH7],
        room_alt: ["Chambre 7"],
        sdb_pic: null,
        sdb_alt: null,
        terasse_pic: null,
        terasse_alt: null,
    },
    {
        id: 8,
        room_pic: [CH8],
        room_alt: ["Chambre 8"],
        sdb_pic: null,
        sdb_alt: null,
        terasse_pic: null,
        terasse_alt: null,
    },
    {
        id: 9,
        room_pic: [CH9],
        room_alt: ["Chambre 9"],
        sdb_pic: null,
        sdb_alt: null,
        terasse_pic: null,
        terasse_alt: null,
    },
    {
        id: 10,
        room_pic: [CH10ks, CH10salon, CH10single],
        room_alt: ["Chambre 10 Lit King Size", "Chambre 10 Salon", "Chambre 10 Lits Simples"],
        sdb_pic: SB10,
        sdb_alt: "Salle de bain 10",
        terasse_pic: T10,
        terasse_alt: "Terasse 10",
    },
    {
        id: 11,
        room_pic: [CH11],
        room_alt: ["Chambre 11"],
        sdb_pic: SB11,
        sdb_alt: "Salle de bain 11",
        terasse_pic: null,
        terasse_alt: null,
    },
    {
        id: 12,
        room_pic: [CH12],
        room_alt: ["Chambre 12"],
        sdb_pic: SB12,
        sdb_alt: "Salle de bain 12",
        terasse_pic: T12,
        terasse_alt: "Terasse 12",
    },
];

export default roompic;