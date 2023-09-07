import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title, location}) => {
    return (
        <div className= 'title'>
            <h1 className='title__title'>{title}</h1>
            <p className='title__location'>{location}</p>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default Title;