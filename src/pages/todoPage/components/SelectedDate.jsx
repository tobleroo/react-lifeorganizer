
import ChosenDate from "./ChosenDate"
import AddTasks from "./AddTasks"


export  default function SelectedDate({savedTasks, setSavedTasks, selectedDate, setSelectedDate}){

    return (
        <div className="middleBar">

            <ChosenDate selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>

            <AddTasks savedTasks={savedTasks}
            setSavedTasks={setSavedTasks}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}/>

            <div className="toBackEnd">
                <button>Save all</button>
            </div>

        </div>
    )

}