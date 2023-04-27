
import ChosenDateTask from "./ChosenDateTask"

export default function ChosenDate(){

    return (
        <div className="ChosenDate">
            <div className="chosenData">
                <h4>chosen day</h4>
                <h5>måndag 02-03-2032</h5>
            </div>
            
            <div className="chosenDateTasksBox">
                <h4>tasks</h4>
                <ChosenDateTask/>
                <ChosenDateTask/>
            </div>
            
            <div className="chosenDayNumbers">
                <p>total time :20 min</p>
            </div>
            

        </div>
    )
}