
import TaskCategory from "./TaskCategory"

export default function TasksBox({allTasks}){

    return (
        <div className="tasks-box">
            <h2>Saved tasks</h2>

            <TaskCategory allTasksData={allTasks}/>

        </div>
    )
}