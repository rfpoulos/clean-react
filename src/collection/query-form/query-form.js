import React from 'react';
import './query-form.css';
import TextInput from '../../component/text-input/text-input';
import Button from '../../component/button/button';

export default ({
    value, 
    onClick,
    onChange,
}) =>
    <div className="query-form">
        <div className="query-input">
            <TextInput className="query-input"
                type="text"
                placeholder="Guide or Title"
                value={ value }
                onChange={ onChange }
            />
        </div>
        <Button text="Submit"
            onClick={ onClick }
        />
    </div>