


export default function TaskItem({task}){


    return (
        <div className="taskItemData">
            <div className="taskItemName taskData">
                <label htmlFor="">Task name:</label>
                <p>{task.taskName}</p>
            </div>
            <div className="taskItemTime taskData">
                <label htmlFor="">Time</label>
                <p>{task.timeToComplete}</p>
            </div>
            <div className="taskItemTimesCompleted taskData">
                <label htmlFor="">completed:</label>
                <p>{task.timeCompleted} times</p>
            </div>
        </div>
    )

}