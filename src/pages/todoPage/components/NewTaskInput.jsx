
import { useState } from "react";

export default function NewTaskInput({savedTasks}){

    const [categories, setCategories] = useState(getAllCategories(savedTasks));

    function getAllCategories(savedTasks){
        let categories = [];
        savedTasks.forEach(task => {
            categories.push(task.categoryName);
        });
        return categories;
    }

    return (
        <div className="addTaskInputBox">
                <div className="categoriSelectedBox">
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
                <div className="inputTaskName">
                    <label htmlFor="taskName">Task name</label>
                    <input type="text" name="taskName" placeholder="task name" />
                </div>
                
                <div className="addFrequencyBox">
                    <label htmlFor="dropdown">Repeated every:</label>
                    <div className="frequencyInputBox">
                        <input type="number" name="taskFrequency" placeholder="0" />
                        <select id="dropdown" name="fruit">
                            <option value="apple">Days</option>
                            <option value="banana">Weeks</option>
                            <option value="orange">Years</option>
                        </select>
                    </div>
                </div>

                <div className="addTaskTimeBox">
                    <label htmlFor="taskTimeToComplete">Time to complete task</label>
                    <input type="text" name="taskTimeToComplete" placeholder="task time to complete" />
                </div>

                <div className="addTaskDescBox">
                    <textarea name="taskDesc" placeholder="task description"></textarea>
                </div>

            </div>
    )
}