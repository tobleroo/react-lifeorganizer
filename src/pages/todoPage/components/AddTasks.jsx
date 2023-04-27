

import NewTaskInput from "./NewTaskInput"

export default function AddTasks(){


    return (
        <div className="AddTaskBox">
            <h3>add new task</h3>

            <NewTaskInput/>

            <div className="addTaskBtnBox">
                <button id="saveTaskToDbBtn">save to DB</button>
                <button id="saveTodayTaskBtn">save to today</button>
                <button id="saveToBothBtn">Both</button>
            </div>
        </div>
    )
}