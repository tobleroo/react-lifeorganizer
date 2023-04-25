import React from 'react';
import {useState} from 'react';

export default function InputNewTask({AddNewTaskItem}){

    const [newTaskName, setNewTaskName] = useState('');

    const handleAddNewTask = () => {
        AddNewTaskItem(newTaskName);
    }

    return(
        <div>
            <input type="text" placeholder="new task name" 
            onChange={(e) => setNewTaskName(e.target.value)}/>
            <button onClick={handleAddNewTask}>add new task</button>
        </div>
    )
}