

export default function CalendarTaskBox({task}){

    return (
        <div className="CalendarTasksBox">
            {task.length ? (
                task.map((taskData, index) => {
                    return (
                        <div className="taskBox">
                            <p>{taskData.title}</p>
                            {/* <p>time: {taskData.timeToComplete}</p> */}
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