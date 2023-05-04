
import CalendarMonthBox from "./CalendarMonthBox"

export default function CalendarYearBox({yearData, setSelectedDate}){

    return (
        <div className="CalendarYearBox">
            {yearData.length ? (
                yearData.map((monthData, index) => {
                    return (
                        <div className="yearBox">
                            <h5 id="yearNumber">{monthData.year}</h5>
                            <CalendarMonthBox months={monthData.months} setSelectedDate={setSelectedDate}/>
                        </div>
                    )
                })
            ) : (
                <h5>no data</h5>
            )}
        </div>
    )

}