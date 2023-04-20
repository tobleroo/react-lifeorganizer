import React from "react";


function AvailableTasks({listOfTasks}) {
    return (
        <div className="category-box">
            <h2>Available Tasks</h2>
            {listOfTasks.length ? (
                listOfTasks.map((task) => {
                    return (
                        <div className="task-category">
                            <h3>{task.categoryName}</h3>
                            {task.tasks.length ? (
                                task.tasks.map((task) => {
                                    return (
                                        <div className="task-item">
                                            <h4>{task.taskName}</h4>
                                            <p>{task.taskDescription}</p>
                                            <p>{task.timeToComplete}</p>
                                        </div>)
                                })
                            ) : (
                                <p>No tasks in this category</p>
                            )}
                        </div>)
                })
            ) : (
                <p>No Categories available</p>
            )}
        </div>
    )
}

export default AvailableTasks;