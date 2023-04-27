
import ChosenDate from "./ChosenDate"
import AddTasks from "./AddTasks"


export  default function SelectedDate(){

    return (
        <div className="middleBar">

            <ChosenDate/>

            <AddTasks/>

            <div className="toBackEnd">
                <button>Save all</button>
            </div>

        </div>
    )

}