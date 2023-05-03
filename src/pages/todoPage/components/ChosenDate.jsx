
import ChosenDateTask from "./ChosenDateTask"

export default function ChosenDate({selectedDate}){

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
                <h4>chosen day</h4>
                <h5>{selectedDate.date}, {selectedDate.dayOfWeek}</h5>
            </div>
            
            <div className="chosenDateTasksBox">
                <h4>tasks</h4>
                <ChosenDateTask tasks={selectedDate.tasks}/>
            </div>
            
            <div className="chosenDayNumbers">
                <p>total time: {totalTime()}</p>
            </div>
            

        </div>
    )
}