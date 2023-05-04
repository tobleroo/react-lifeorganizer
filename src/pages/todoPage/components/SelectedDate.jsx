
import ChosenDate from "./ChosenDate"
import AddTasks from "./AddTasks"


export  default function SelectedDate({savedTasks, setSavedTasks, selectedDate, setSelectedDate, CalendarData, setCalendarData}){

    return (
        <div className="middleBar">

            <ChosenDate selectedDate={selectedDate} setSelectedDate={setSelectedDate}
            CalendarData={CalendarData} setCalendarData={setCalendarData}/>

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