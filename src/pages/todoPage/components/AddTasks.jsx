
import { useState, useEffect } from "react";

export default function AddTasks({savedTasks, setSavedTasks, selectedDate, setSelectedDate}){

    const [newTask, setNewTask] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories(savedTasks);
    }, [savedTasks]);

    function getAllCategories(savedTasks){
        let categories = [];
        savedTasks.forEach(task => {
            categories.push(task.categoryName);
        });
        // return categories;
        setCategories(categories);
    }

    function saveToTasklist(){
        const newTask = createRepeatTaskFromInput();
        const inputCategory = document.querySelector('#category').value;

        const categoryExists = savedTasks.find((existingCategory) => existingCategory.categoryName === inputCategory);

        if (categoryExists) {
            categoryExists.tasks.push(newTask);
        } else {
            const newCategory = {
            categoryName: inputCategory,
            tasks: [newTask],
            };
            savedTasks.push(newCategory);
        }

        setSavedTasks([...savedTasks]); // create a new copy of the array to trigger re-render
    }

    function saveTaskToSelectedDay(){
        const newTask = createOneTimeTask();

        //add new task to selected date
        //create a dupplicate and add the new task to it
        const newSelectedDate = {...selectedDate};
        newSelectedDate.tasks.push(newTask);
        setSelectedDate(newSelectedDate); // create a new copy of the array to trigger re-render
        console.log(selectedDate);

    }

    //save task to selected date

    function createOneTimeTask(){

        const taskName = document.querySelector('[name="taskName"]').value;
        const taskTimeToComplete = document.querySelector('[name="taskTimeToComplete"]').value;
        const taskDesc = document.querySelector('[name="taskDesc"]').value;

        const oneTimeTask = {
            title: taskName,
            timeToComplete: taskTimeToComplete,
            taskDescription: taskDesc,
            done: false
        }

        return oneTimeTask;
    }

    function createRepeatTaskFromInput(){
        
        const taskName = document.querySelector('[name="taskName"]').value;
        const taskFrequency = document.querySelector('[name="taskFrequency"]').value;
        const taskFrequencyUnit = document.querySelector('#dropdown').value;
        const taskTimeToComplete = document.querySelector('[name="taskTimeToComplete"]').value;
        const taskDesc = document.querySelector('[name="taskDesc"]').value;

        const newTask = {
            taskName: taskName,
            taskFrequency: taskFrequency,
            taskFrequencyUnit: taskFrequencyUnit,
            timeToComplete: taskTimeToComplete,
            taskDescription: taskDesc,
            timeCompleted : 0
        }

        return newTask;
    }

    function saveToBoth(){
        const repeatTask = createRepeatTaskFromInput();
        const oneTimeTask = createOneTimeTask();

        saveToTasklist(repeatTask);
        saveTaskToSelectedDay(oneTimeTask);
    }

    return (
        <div className="AddTaskBox">
            <h3 id="addNewTaskHead">add new task</h3>

            <div className="addTaskInputBox">
                <div className="categoriSelectedBox inputBox">
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" name="category" list="category-list" />
                    <datalist id="category-list">
                        {categories.length ? (
                            categories.map((category, index) => {
                            return <option key={index} value={category} />;
                            })
                        ) : (
                            <option value="no data">no data</option>
                        )}
                    </datalist>
                </div>
                <div className="inputTaskName inputBox">
                    <label htmlFor="taskName">Task name</label>
                    <input type="text" name="taskName" placeholder="task name" />
                </div>
                
                <div className="addFrequencyBox inputBox">
                    <label htmlFor="dropdown">Repeated every:</label>
                    <div className="frequencyInputBox">
                        <input type="number" name="taskFrequency" placeholder="0" />
                        <select id="dropdown" name="fruit">
                            <option value="days">Days</option>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                            <option value="years">Years</option>
                        </select>
                    </div>
                </div>

                <div className="addTaskTimeBox inputBox">
                    <label htmlFor="taskTimeToComplete">Time to complete task</label>
                    <input type="text" name="taskTimeToComplete" placeholder="task time to complete" />
                </div>

                <div className="addTaskDescBox inputBox">
                    <label htmlFor="taskDesc">task description</label>
                    <textarea name="taskDesc" placeholder="task description"></textarea>
                </div>
            </div>

            <div className="addTaskBtnBox">
                <button id="saveTaskToDbBtn" onClick={saveToTasklist}>save to DB</button>
                <button id="saveTodayTaskBtn" onClick={saveTaskToSelectedDay}>save to today</button>
                <button id="saveToBothBtn" onClick={saveToBoth}>Both</button>
            </div>
        </div>
    )
}