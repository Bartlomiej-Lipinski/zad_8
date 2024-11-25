import React from 'react';
import './ListItem.css';

const ListItem = ({ lek, onRemove }) => {
    return (
        <li className="list-item">
            <p>{lek.text}</p>
            <p>{lek.description}</p>
            <p>{lek.dose}</p>
            <button className="remove-button" onClick={() => onRemove(lek.id)}>Remove</button>
        </li>
    );
};

export default ListItem;