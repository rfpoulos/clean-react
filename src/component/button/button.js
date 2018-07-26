import React from 'react';
import './button.css';

export default ({ 
    text, 
    onClick,
}) =>
    <button className="button" 
        onClick={ onClick }>
        { text }
    </button>