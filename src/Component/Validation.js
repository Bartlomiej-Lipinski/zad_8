import React from 'react';

const Validator = ({ text, minLength }) => {
    return (
        <div className="validator">
            {text.trim().length > 0 && text.trim().length < minLength && (
                <span className="warning">Text must be at least {minLength} characters long.</span>
            )}
        </div>
    );
};

export default Validator;