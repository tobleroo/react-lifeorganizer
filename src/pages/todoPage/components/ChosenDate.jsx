
import ChosenDateTask from "./ChosenDateTask"

export default function ChosenDate({selectedDate, setSelectedDate, CalendarData, setCalendarData}){

    function totalTime(){
        let totalTime = 0;
        selectedDate.tasks.forEach(task => {
            totalTime += task.timeToComplete;
        });
        return totalTime;
    }

    return (
        <div className="ChosenDate">
            <div className="chosenData">
                <p>{selectedDate.dayOfWeek}</p>
                <p>{selectedDate.date}</p> 
            </div>
            
            <div className="chosenDateTasksBox">
                <p id="taskTitle">tasks</p>
                <ChosenDateTask selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                CalendarData={CalendarData} setCalendarData={setCalendarData}/>
            </div>
            
            <div className="chosenDayNumbers">
                <b>total time: {totalTime()} minutes</b>
            </div>
            

        </div>
    )
}