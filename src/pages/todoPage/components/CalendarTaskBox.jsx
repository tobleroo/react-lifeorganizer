

export default function CalendarTaskBox({task}){

    return (
        <div className="CalendarTasksBox">
            {task.length ? (
                task.map((taskData, index) => {
                    return (
                        <div className="taskBox">
                            <h5>{taskData.title}</h5>
                            <p>{taskData.timeToComplete}</p>
                        </div>
                    )
                }
                )
            ) : (
                <h5>no data</h5>
            )}
        </div>
    )
}