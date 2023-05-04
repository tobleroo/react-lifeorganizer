


export default function ChosenDateTask({ selectedDate, setSelectedDate }) {


    function removeOneTask(task){
        //remove one task from tasks array
        //create a dupplicate and remove the task from it
        const newSelectedDate = { ...selectedDate };
        const newTasks = newSelectedDate.tasks.filter(taskItem => taskItem.title !== task.title);
        newSelectedDate.tasks = newTasks;
        setSelectedDate(newSelectedDate);
        
    }

    return (
        <div className="ChosenDateTask">
            {selectedDate.tasks.length ? (
                selectedDate.tasks.map((task, index) => {
                    return (
                        <div className="handleTask">
                            <p>{task.title}</p>
                            <input type="checkbox" name="taskCompleted" />
                            <button onClick={() => {removeOneTask(task)}}>remove</button>
                        </div>
                    )
                }
                )
            ) : (
                <h5>no tasks</h5>
            )}
        </div>
    )
}