import React, { useState } from 'react';
import arrow from '../assets/Arrow.png';

const Collapse = ({ title, content}) => {
    const [isCollapsed, setIsCollapsed] = useState (true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
            <div className='collapse'>
                <button className={`collapse__button ${isCollapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
                    {title}
                    <div className={`collapse__icon ${isCollapsed ? '' : 'expanded'}`} onClick={toggleCollapse}>
                        <img src={arrow} alt='arrow icon' />    
                    </div>
                </button>
                {!isCollapsed && <div className='collapse__content'>{content}</div>}
            </div>
    );
};

export default Collapse;