import React, { useState } from 'react';
import ListItem from './ListItem';
import TextValidator from './TextValidator';
import './App.css';

const List = () => {
    const [Leki, setLeki] = useState([]);
    const [newLek, setNewLek] = useState('');

    const addItem = () => {
        if (newLek.trim().length >= 3) {
            setLeki([...Leki, { id: Date.now(), text: newLek }]);
            setNewLek('');
        }
    };

    const removeItem = (id) => {
        let temp = [...Leki];
        temp.splice(id, 1);
        setLeki(temp);
    };

    return (
        <div>
            <h1>Moje Leki</h1>
            <TextValidator value={newLek} onChange={(e) => setNewLek(e.target.value)}/>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {Leki.map((item) => (
                    <ListItem key={item.id} item={item} onRemove={removeItem} />
                ))}
            </ul>
        </div>
    );
};

export default List;