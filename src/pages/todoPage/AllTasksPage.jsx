import React from "react";

import { useState, useEffect } from "react";

import TasksBox from "./components/TasksBox";
import SelectedDate from "./components/SelectedDate";
import CalendarBox from "./components/CalendarBox";

//import AllTasksPage css file
import "../../styles/pages/AllTasksPage.css"

//demo data
import demoAllDataCollected from "../../demoData/demoAllDataCollected";


function AllTasksPage() {

  const [savedTasks, setSavedTasks] = useState([]);
  const [CalendarData, setCalendarData] = useState([]);

  // console.log(savedTasks);

  useEffect(() => {
    const allData = demoAllDataCollected();
    const allTasks = allData.taskList;
    setSavedTasks(allTasks);

    const calendarDataJson = allData.todoCalendar;
    setCalendarData(calendarDataJson);
    // console.log('calendar 2 ->' + allData.todoCalendar);

    console.log('calendar 3 ->' + CalendarData);
  }, []);

  return(
    <div className="AllComponentsBox">

        {/* <TasksBox allTasks={savedTasks}/> */}

        <SelectedDate/>

        <CalendarBox/>
    </div>
  )

}

export default AllTasksPage;
