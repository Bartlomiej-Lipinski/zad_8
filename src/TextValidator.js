import React from 'react';
import './App.css';

const TextValidator = ({ value, onChange }) => {
    const isValid = value.trim().length >= 3;

    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
            {!isValid && <p>Text must be at least 3 characters long</p>}
        </div>
    );
};

export default TextValidator;