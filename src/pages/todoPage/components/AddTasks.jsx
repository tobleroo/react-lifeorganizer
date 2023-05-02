

import NewTaskInput from "./NewTaskInput"

export default function AddTasks({savedTasks, setSavedTasks}){



    return (
        <div className="AddTaskBox">
            <h3>add new task</h3>

            <NewTaskInput savedTasks={savedTasks}/>

            <div className="addTaskBtnBox">
                <button id="saveTaskToDbBtn">save to DB</button>
                <button id="saveTodayTaskBtn">save to today</button>
                <button id="saveToBothBtn">Both</button>
            </div>
        </div>
    )
}