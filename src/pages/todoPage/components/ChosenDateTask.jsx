


export default function ChosenDateTask({ selectedDate, setSelectedDate, CalendarData, setCalendarData }) {


    function removeOneTask(task){

        const dateToUse = selectedDate.date;

        //create dupplicate of calendarData
        const calendarDataCopy = [...CalendarData];
        //remove the task from the spepcific day
        calendarDataCopy.forEach(year => {
            year.months.forEach(month => {
                month.days.forEach(day => {
                    if(day.date === dateToUse){
                        day.tasks = day.tasks.filter(taskToCheck => taskToCheck.title !== task.title);
                        setSelectedDate(day);
                        setCalendarData(calendarDataCopy);
                    }
                })
            })
        })
        
        // console.log(dateToUse);
        
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