import React from 'react';
import PropTypes from 'prop-types';

const Host = ({ hostName, hostPicture}) => {
    return (
        <div className='host'>
            <p className='host__name'>{hostName}</p>
            <img className='host__image' src={hostPicture} alt={hostName} />
        </div>
    );
};

Host.propTypes = {
    hostName: PropTypes.string.isRequired,
    hostPicture: PropTypes.string.isRequired,
};

export default Host;