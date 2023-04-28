import React from "react";

import { useState, useEffect } from "react";

import TasksBox from "./components/TasksBox";
import SelectedDate from "./components/SelectedDate";
import CalendarYearBox from "./components/CalendarYearBox";

//import AllTasksPage css file
import "../../styles/pages/AllTasksPage.css"

//demo data
// import demoAllDataCollected from "../../demoData/demoAllDataCollected";
import demoTaskList from "../../demoData/demoTaskList";
import demoTodoCalendar from "../../demoData/demoTodoCalendar";


function AllTasksPage() {

  const [savedTasks, setSavedTasks] = useState([]);
  const [CalendarData, setCalendarData] = useState([]);

  // console.log(savedTasks);

  useEffect(() => {
    setSavedTasks(demoTaskList);
    setCalendarData(demoTodoCalendar);

  }, []);

  return(
    <div className="AllComponentsBox">

        <TasksBox allTasks={savedTasks}/>

        <SelectedDate/>

        
        <CalendarYearBox yearData={CalendarData}/>
        {/* <CalendarBox calendarData={CalendarData}/> */}
    </div>
  )

}

export default AllTasksPage;
