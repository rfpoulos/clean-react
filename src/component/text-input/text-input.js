import React from 'react';
import './text-input.css';

export default ({ 
    type, 
    placeholder, 
    value, 
    onChange,
    style,
}) =>
    <input className="input"
        type={ type }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange } 
        style={ style }
        onClick={ (event) => { event.target.select() } }
    />