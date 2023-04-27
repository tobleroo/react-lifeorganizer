
import demoTaskList from "./demoTaskList";
import demoTodoCalendar from "./demoTodoCalendar";

export default function demoAllDataCollected(){

    return {
        taskList: demoTaskList(),
        todoCalendar: demoTodoCalendar()
    }
}

