
import WeeklyCalendarCard from "./WeeklyCalendarCard"


export default function CalendarBox(){



    return (
        <div className="CalendarBox">
            <div className="CalendarText">
                <h3>Calendar</h3>
                <p>2023</p>
            </div>
            
            <WeeklyCalendarCard/>
            <WeeklyCalendarCard/>
        </div>
    )
}