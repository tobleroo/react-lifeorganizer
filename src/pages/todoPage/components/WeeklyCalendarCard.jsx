
import { DateTaskCard } from "./DateTaskCard"


export default function WeeklyCalendarCard(){


    return (
        <div className="calendarWeekCard">
        <div className="MonthlyCard">
            <h3>februari</h3>
            <div className="WeekBox">
                <h3>week 3</h3>
                <div className="DayBox">
                    <p>måndag </p>
                    <p>02-23-23</p>
                    <div className="TasksDateBox">
                        <p>task 1</p>
                        <p>task 2</p>
                    </div>
                </div>
                <div className="DayBox">
                    <p>tisdag </p>
                    <p>02-23-23</p>
                    <div className="TasksDateBox">
                        <p>task 1</p>
                        <p>task 2</p>
                    </div>
                </div>
            </div>

            <div className="weekNumberBox">
                <h3>week 3</h3>
            </div>
  
            <DateTaskCard/>
            <DateTaskCard/>

        </div>
    )


}