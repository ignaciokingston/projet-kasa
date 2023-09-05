import React, { useState } from 'react';

const Slideshow = ({ pictures }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState (0);

    const nextSlide = () => {
        setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex (
            currentImageIndex === 0 ? pictures.length - 1 : currentImageIndex - 1
        );
    };

    return (
        <div className='slideshow'>
            <img className='slideshow__image' src={pictures[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
            {pictures.length > 1 && (
                <div className='slideshow__buttons'>
                    <button className='slideshow__buttons--left' onClick={prevSlide}>&lt;</button>   
                    <button className='slideshow__buttons--right' onClick={nextSlide}>&gt;</button>
                </div>
            )}
        </div>  
    );
};

export default Slideshow;