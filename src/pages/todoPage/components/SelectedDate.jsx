
import ChosenDate from "./ChosenDate"
import AddTasks from "./AddTasks"


export  default function SelectedDate({savedTasks, setSavedTasks, selectedDate ,setSelectedDate}){

    return (
        <div className="middleBar">

            <ChosenDate selectedDate={selectedDate}/>

            <AddTasks savedTasks={savedTasks}
            setSavedTasks={setSavedTasks}/>

            <div className="toBackEnd">
                <button>Save all</button>
            </div>

        </div>
    )

}