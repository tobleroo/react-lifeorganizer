
import CalendarDayBox from "./CalendarDayBox"
export default function CalendarMonthBox({months}){

    return (
        <div className="CalendarMonthBox">
            {months.length ? (
                months.map((weekData, index) => {
                    return (
                        <div className="monthBox">
                            <h5>{weekData.name}</h5>
                            <CalendarDayBox days={weekData.days}/>
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