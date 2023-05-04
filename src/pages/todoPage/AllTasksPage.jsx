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
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setSavedTasks(demoTaskList);
    setCalendarData(demoTodoCalendar);
    
  }, []);

  useEffect(() => {
    if (CalendarData && CalendarData.length > 0) {
      if(!selectedDate){
        setTodayDate();
      }

    }
  }, [CalendarData, selectedDate]);

  function setTodayDate(){
    //for demo purposes
    const today = '2021-01-01';

    const todayDate = CalendarData[0].months[0].days.find(day => day.date === today);
    setSelectedDate(todayDate);
  }

  if (savedTasks.length > 0 && CalendarData.length > 0 && selectedDate) {
    return(
      <div className="AllComponentsBox">
          <TasksBox allTasks={savedTasks}/>
          <SelectedDate savedTasks={savedTasks} setSavedTasks={setSavedTasks} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
          <CalendarYearBox yearData={CalendarData} setSelectedDate={setSelectedDate}/>
      </div>
    )
  } else {
    // Render a loading spinner or message while the data is being loaded
    return <div>Loading...</div>;
  }

}

export default AllTasksPage;

///create a add btn for each tasks to add to day from db list