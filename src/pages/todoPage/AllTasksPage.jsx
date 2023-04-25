import React from "react";

import TasksBox from "./components/TasksBox";
import SelectedDate from "./components/SelectedDate";
import CalendarBox from "./components/CalendarBox";

//import AllTasksPage css file
import "../../styles/pages/AllTasksPage.css"


function AllTasksPage() {

  return(
    <div className="AllComponentsBox">
        <TasksBox/>

        <SelectedDate/>

        <CalendarBox/>
    </div>
  )

}

export default AllTasksPage;
