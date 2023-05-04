

import TaskItem from "./TaskItem"
export default function TaskCategory({allTasksData, selectedDate, setSelectedDate}){

    return (
        <div className="taskCategoryBox">

            {allTasksData.length ? (
                allTasksData.map((task, index) => (
                    <div className="one-category" key={index}>
                        <h2>{task.categoryName}</h2>
                        {task.tasks.length ? (
                            task.tasks.map((task, index) => (
                            <TaskItem task={task} key={index}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}/>
                            )))
                            : (<h3>No tasks</h3>
                        )}
                    </div>
                ))
            ) : (
                <h3>No Categories</h3>
            )}
            
        </div>
    )
}