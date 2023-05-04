


export default function TaskItem({task, selectedDate, setSelectedDate}){

    function addToDay(){
        const taskToDay = {
            title: task.taskName,
            timeToComplete: task.timeToComplete,
            desc: task.taskDescription,
            done: false
        }
        
        //set to selectedDay task list
        const newSelectedDay = {...selectedDate};
        newSelectedDay.tasks.push(taskToDay);
        setSelectedDate(newSelectedDay);
    }


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
            <div className="addToSelectedDayBox">
                <button id="taskToSelDayBtn" onClick={addToDay}>+</button>
            </div>
        </div>
    )

}