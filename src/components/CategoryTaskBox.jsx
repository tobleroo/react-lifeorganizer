import React from "react";
import TaskData from "./TaskData";
// import InputNewTask from "./InputNewTask";

export default function CategoryTaskBox({taskObject}){

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
            {/* <InputNewTask /> */}
        </div>
    )
};