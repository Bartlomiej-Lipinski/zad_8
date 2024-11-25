import React, { useState } from 'react';
import ListaLek from './ListaLek';
import './App.css';
import Validator from "./Component/Validation";
const Lista = () => {
    const [Leki, setLeki] = useState([]);
    const [newLek, setNewLek] = useState('');
    const [opis, setOpis] = useState('');
    const [dawka, setDawka] = useState('');

    const dodajLek = () => {
        if (newLek.trim().length >= 3) {
            setLeki([...Leki, { id: Date.now(), nazwa: newLek, opis: opis, dawka: dawka }]);
            setNewLek('');
            setOpis('');
            setDawka('');
        }
    };

    const UsunLek = (id) => {
        setLeki(Leki.filter(item => item.id !== id));
    };

    return (
        <div>
            <h1>Moje Leki</h1>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Name"
                    value={newLek}
                    onChange={(e) => setNewLek(e.target.value)}
                />
                <Validator text={newLek} minLength={3}/>
                <input
                    type="text"
                    placeholder="Description"
                    value={opis}
                    onChange={(e) => setOpis(e.target.value)}
                />
                <Validator text={opis} minLength={3}/>
                <input
                    type="text"
                    placeholder="Dose"
                    value={dawka}
                    onChange={(e) => setDawka(e.target.value)}
                />
                <Validator text={dawka} minLength={3}/>
            </div>
            <button onClick={dodajLek}>Add Item</button>
            <ul>
                {Leki.map((item) => (
                    <ListaLek key={item.id} lek={item} usun={UsunLek}/>
                ))}
            </ul>
        </div>
    );
};

export default Lista;