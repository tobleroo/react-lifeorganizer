
import CalendarDayBox from "./CalendarDayBox"
export default function CalendarMonthBox({months, setSelectedDate}){

    return (
        <div className="CalendarMonthBox">
            {months.length ? (
                months.map((weekData, index) => {
                    return (
                        <div className="monthBox">
                            <h5 id="monthNumber">{weekData.name}</h5>
                            <CalendarDayBox days={weekData.days} setSelectedDate={setSelectedDate}/>
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