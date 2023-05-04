


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
            <div className="taskItemName">
                <p>{task.taskName}</p>
                <button id="taskToSelDayBtn" onClick={addToDay}>+</button>
            </div>
            <div className="taskItemTime taskData">
                <b>Time: {task.timeToComplete} minutes</b>
            </div>
            <div className="taskItemTimesCompleted taskData">
                <b>Completed: {task.timeCompleted} times</b>
            </div>

           
        </div>
    )

}