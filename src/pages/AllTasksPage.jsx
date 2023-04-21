import React from "react";
import {useState} from "react";

import AvailableTasks from "../components/AvailableTasks";
import demoTaskList from "../demoData/demoTaskList";
import InputNewCategory from "../components/InputNewCategory";

//import css
import "../styles/pages/AllTasksPage.css";

function AllTasksPage() {

  const [tasks, setTasks] = useState(demoTaskList);

  const AddNewCategoryItem = (newCategoryName) => {
    const newCategory = {
      categoryName: newCategoryName,
      tasks: []
    };

    setTasks([...tasks, newCategory]);
  }

  const saveTaskData = () => {
    console.log('data will be sent to backend');
  }

  return(
    <div>
        {/* box of created categories and their tasks */}
        <AvailableTasks listOfTasks={tasks}/>

        {/* box to add new tasks to the list */}
        <InputNewCategory onAddTask={AddNewCategoryItem}/>
    </div>
  )

}

export default AllTasksPage;
