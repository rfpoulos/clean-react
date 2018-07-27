import React from 'react';
import './result-card.css';
import InfoText from '../../component/iterable/info-text/info-text';
import Title from '../../component/iterable/title/title';

export default ({
    distance,
    name,
    onClick,
}) =>
    <div className="result-card"
        onClick={ onClick }
    >
        <Title text={ name } />
        <InfoText text={ distance.toFixed(2) + 'mi' } />
    </div>