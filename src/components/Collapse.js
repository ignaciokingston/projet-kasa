import React, { useState } from 'react';

const Collapse = ({ title, content}) => {
    const [isCollapsed, setIsCollapsed] = useState (true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
            <div className='collapse'>
                <button className={`collapse__button ${isCollapsed ? 'collapsed' : ''}`}>
                    {title}
                    <span className={`collapse__icon ${isCollapsed ? '' : 'expanded'}`} onClick={toggleCollapse}>ʌ</span>
                </button>
                {!isCollapsed && <div className='collapse__content'>{content}</div>}
            </div>
    );
};

export default Collapse;