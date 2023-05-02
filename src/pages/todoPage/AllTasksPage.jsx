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

// working on saving tasks to tasks database (left bar on page)
//currently got categories to work in add task input
//need to work on saving tasks to database

function AllTasksPage() {

  const [savedTasks, setSavedTasks] = useState([]);
  const [CalendarData, setCalendarData] = useState([]);

  useEffect(() => {
    setSavedTasks(demoTaskList);
    setCalendarData(demoTodoCalendar);

  }, [setSavedTasks, setCalendarData]);

  return(
    <div className="AllComponentsBox">

        <TasksBox allTasks={savedTasks}/>

        <SelectedDate savedTasks={savedTasks}
        setSavedTasks={setSavedTasks}/>

        <CalendarYearBox yearData={CalendarData}/>
    </div>
  )

}

export default AllTasksPage;
