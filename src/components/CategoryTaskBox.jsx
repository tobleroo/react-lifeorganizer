import React from "react";
import TaskData from "./TaskData";
import InputNewTask from "./NewTaskAdd";

import { useState } from "react";

export default function CategoryTaskBox({taskObject}){

    const [tasks, setTasks] = useState(taskObject.tasks);

    const AddNewTaskItem = (newTaskName) => {

        const newTask = {
            taskName: newTaskName,
            taskDescription: "",
            timeToComplete: 0,
            timeCompleted: 0,
        };

        console.log(newTask)

        setTasks([...tasks, newTask]);

        console.log(tasks)
    }


    return(
        <div className="category-box">
            <h2>{taskObject.categoryName}</h2>
            {taskObject.tasks.length ? (
                taskObject.tasks.map((task) => {
                    return (
                        <TaskData task={task} />
                    )
                })
            ) : (
                <p>No tasks in this category</p>
            )}
            <InputNewTask AddNewTaskItem={AddNewTaskItem}/>
        </div>
    )
};