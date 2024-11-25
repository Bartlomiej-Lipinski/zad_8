import React from 'react';
import './ListaLek.css';

const ListaLek = ({ lek, usun }) => {
    return (
        <div>
            <li className="list-item">
                <p>{lek.nazwa}</p>
                <p>{lek.opis}</p>
                <p>{lek.dawka}</p>
                <button className="remove-button" onClick={() => usun(lek.id)}>Remove</button>
            </li>
        </div>
    );
};

export default ListaLek;