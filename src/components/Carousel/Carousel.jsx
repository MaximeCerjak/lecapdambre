import React, { useState, useEffect } from 'react';
import picimport from '../../data/picimport';
import './Carousel.css';

const shuffleArray = (array) => {
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const Carousel = () => {
    const [images] = useState(shuffleArray(picimport));
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Changer d'image toutes les 3 secondes

        return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage
    }, [images.length]);

    return (
        <section className="carousel" id="gallery">
            <div className="carousel-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.img}
                        alt={image.alt}
                        className={index === currentIndex ? 'active' : ''}
                    />
                ))}
            </div>
            <button className="btn-carousel" onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}>&lt;</button>
            <button className="btn-carousel" onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}>&gt;</button>
        </section>
    );
};

export default Carousel;
