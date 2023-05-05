
import CalendarTaskBox from "./CalendarTaskBox"

export default function CalendarDayBox({days, setSelectedDate}){

    const changeSelectedDate = (dayData) => {
        setSelectedDate(dayData);
    }


    return (
        <div className="CalendarDayBox">
            {days.length ? (
                days.map((dayData, index) => {
                    return (
                        <div className="dayBox" onClick={() => {changeSelectedDate(dayData)}}>
                            <p id="dayDate">{dayData.date}</p>
                            <p id="dayDay">{dayData.dayOfWeek}</p>
                            <CalendarTaskBox task={dayData.tasks}/>
                        </div>
                    )
                }
                )
            ) : (
                <h5>no data</h5>
            )}
        </div>
    )

}