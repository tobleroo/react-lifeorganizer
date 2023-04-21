

import React from 'react';
import {useState} from 'react';

export default function AddNewCategory({onAddTask}) {

    const [categoryName, setCategoryName] = useState('');

    const addNewCategory = () => {
        onAddTask(categoryName);
        setCategoryName('');
    }

    return (
        <div>
            <input type="text"  value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}/>
            <button onClick={addNewCategory}>add new task</button>
        </div>
    )
}