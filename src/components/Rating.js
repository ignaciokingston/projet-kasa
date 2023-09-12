import React from 'react';
import PropTypes from 'prop-types';
import Etoile from '../assets/Etoile.png';
import Etoilevide from '../assets/Etoilevide.png';


const Rating = ({ rating }) => {

    //transformer le nombre d'étoiles à un numéro entier
    const filledStars = parseInt(rating, 10); 
    //calculer les étoiles vides
    const emptyStars = 5 - filledStars;

    //array vide qu'on va remplir avec les boucles de filledStars et emptyStars
    const stars = [];

    //pour générer les étoiles 
    for (let i = 0; i < filledStars; i++) {
        stars.push(<img key={i} src={Etoile} alt={`Etoile ${i}`} />);
    }

    //pour générer les étoiles vides
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<img key={i + filledStars} src={Etoilevide} alt={`Etoilevide ${i}`} />);
    }


    return (
        <div className='rating'>
            { stars }
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
}

export default Rating;