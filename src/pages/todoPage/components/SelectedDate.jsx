
import ChosenDate from "./ChosenDate"
import AddTasks from "./AddTasks"


export  default function SelectedDate({savedTasks, setSavedTasks}){

    return (
        <div className="middleBar">

            <ChosenDate/>

            <AddTasks savedTasks={savedTasks}
            setSavedTasks={setSavedTasks}/>

            <div className="toBackEnd">
                <button>Save all</button>
            </div>

        </div>
    )

}