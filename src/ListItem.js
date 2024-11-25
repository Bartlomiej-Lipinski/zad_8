import React from 'react';
import './ListItem.css';

const ListItem = ({ item, onRemove }) => {
    return (
        <li className="list-item">
            <p>{item.text}</p>
            <button className="remove-button" onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </li>
    );
};

export default ListItem;