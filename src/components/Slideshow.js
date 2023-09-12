import React, { useState } from 'react';

const Slideshow = ({ pictures }) => {
    //on utilise le hook useState pour maintenir un état local currentImageIndex
    const [currentImageIndex, setCurrentImageIndex] = useState (0);

    //fonction pour avancer dans la galerie
    const nextSlide = () => {
        //mise à jour de currentImageIndex + retourner à la première image au fin du cycle
        setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
    };

    //fonction pour aller en arrière + revenir à la dernière 
    const prevSlide = () => {
        setCurrentImageIndex (
            currentImageIndex === 0 ? pictures.length - 1 : currentImageIndex - 1
        );
    };

    //fonction pour calculer la quantité d'images
    const totalImages = pictures.length;

    return (
        <div className='slideshow'>
            <img className='slideshow__image' src={pictures[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
            {/*Montrer les flèches s'il y a plus d'une image*/}
            {totalImages > 1 && (
                <div className='slideshow__buttons'>
                    <button className='slideshow__buttons--left' onClick={prevSlide}>&lt;</button>   
                    <button className='slideshow__buttons--right' onClick={nextSlide}>&gt;</button>
                </div>
            )}
            {/*Montrer le compteur s'il y a plus d'une image*/}
            {totalImages > 1 && (
                <div className='slideshow__counter'>
                    {currentImageIndex + 1}/{totalImages}
                    {/*Montre le numéro d'image sur le totale*/}
                </div>
            )}
        </div>  
    );
};

export default Slideshow;