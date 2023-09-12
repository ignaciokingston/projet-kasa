import React, { useState } from 'react';
import arrow from '../assets/Arrow.png';
import '../style/collapse.css'


const Collapse = ({ title, content}) => {
    //définition d'état local "isCollapsed" comme true (vrai)
    const [isCollapsed, setIsCollapsed] = useState (true);

    //pour modifier l'état de "isCollapsed"
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
            <div className='collapse'>
                <button className='collapse__button'  onClick={toggleCollapse}>
                    {title}
                    <div className={`collapse__icon ${isCollapsed ? 'collapsed' : 'expanded'}`} onClick={toggleCollapse}>
                    {/*changement de classe selon l'état de "isCollapsed" */}    
                        <img src={arrow} alt='arrow icon' />    
                    </div>
                </button>
                <div className={`collapse__content ${isCollapsed ? '' : 'expanded'}`} >
                {/*changement de classe selon l'état de "isCollapsed" */}
                    {content}
                </div>
            </div>
    );
};

export default Collapse;