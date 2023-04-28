
import CalendarMonthBox from "./CalendarMonthBox"

export default function CalendarYearBox({yearData}){

    return (
        <div className="CalendarYearBox">
            {yearData.length ? (
                yearData.map((monthData, index) => {
                    return (
                        <div className="yearBox">
                            <h5>{monthData.year}</h5>
                            <CalendarMonthBox months={monthData.months}/>
                        </div>
                    )
                })
            ) : (
                <h5>no data</h5>
            )}
        </div>
    )

}