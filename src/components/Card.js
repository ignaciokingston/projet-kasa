import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/card.css';


const Card = ({id, title, cover}) => {
    return (
        <Link to={`/fichelogements/${id}`} className='card'>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;