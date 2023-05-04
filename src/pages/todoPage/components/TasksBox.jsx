
import TaskCategory from "./TaskCategory"

export default function TasksBox({allTasks, selectedDate, setSelectedDate}){

    return (
        <div className="tasks-box">
            <h2>Saved tasks</h2>

            <TaskCategory allTasksData={allTasks}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}/>

        </div>
    )
}