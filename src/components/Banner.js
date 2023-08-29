import React from 'react';
import PropTypes from 'prop-types';
import '../style/card.css';

const Banner = ({imageUrl, title}) => {
    return (
        <div className='banner'>
            <img className='banner__image' src={imageUrl} alt="Banner" />
            <h1 className='banner__title'>{title}</h1>
        </div>
    );
};

Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Banner;