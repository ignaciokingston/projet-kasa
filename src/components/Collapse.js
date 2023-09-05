import React, { useState } from 'react';
import arrow from '../assets/Arrow.png';
import '../style/collapse.css'


const Collapse = ({ title, content}) => {
    const [isCollapsed, setIsCollapsed] = useState (true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
            <div className='collapse'>
                <button className='collapse__button'  onClick={toggleCollapse}>
                    {title}
                    <div className={`collapse__icon ${isCollapsed ? 'collapsed' : 'expanded'}`} onClick={toggleCollapse}>
                        <img src={arrow} alt='arrow icon' />    
                    </div>
                </button>
                <div className={`collapse__content ${isCollapsed ? '' : 'expanded'}`} >
                    {content}
                </div>
            </div>
    );
};

export default Collapse;