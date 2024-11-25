import React, { useState } from 'react';
import ListItem from './ListItem';
import './App.css';

const List = () => {
    const [Leki, setLeki] = useState([]);
    const [newLek, setNewLek] = useState('');
    const [description, setDescription] = useState('');
    const [dose, setDose] = useState('');

    const addItem = () => {
        if (newLek.trim().length >= 3) {
            setLeki([...Leki, { id: Date.now(), text: newLek }]);
            setNewLek('');
            setDescription('');
            setDose('');
        }
    };

    const removeItem = (id) => {
        setLeki(Leki.filter(item => item.id !== id));
    };

    return (
        <div>
            <h1>Moje Leki</h1>
            <div className="input-group">
            <input type="text" placeholder="name" value={newLek} onChange={(e) => setNewLek(e.target.value)}/>
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" placeholder="Dose" value={dose} onChange={(e) => setDose(e.target.value)}/>
            </div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {Leki.map((item) => (
                    <ListItem key={item.id} lek={item} onRemove={removeItem}/>
                ))}
            </ul>
        </div>
    );
};

export default List;