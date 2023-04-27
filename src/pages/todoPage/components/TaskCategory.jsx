

import TaskItem from "./TaskItem"
export default function TaskCategory({allTasks}){

    console.log(allTasks)


    return (
        <div className="taskCategoryBox">

            {allTasks.length ? (
                allTasks.map((task, index) => (
                    <div className="one-category" key={index}>
                        <h2>{task.categoryName}</h2>
                        {task.tasks.length ? (
                            task.tasks.map((task, index) => (
                            <TaskItem task={task} key={index}/>
                            )))
                            : (<h3>No tasks</h3>
                        )}
                    </div>
                ))
            ) : (
                <h3>No Categories</h3>
            )}
            <div className="one-category">
                <h2>Task category</h2>
                <div className="oneTaskData">
                    <div className="taskName">
                        <h4>Task name</h4>
                        <div className="optionsBtns">
                            <b>deleteBtn</b>
                            <b>addBtn</b>
                        </div>
                    </div>
                    <div className="smallData">
                        <div className="dataBox">
                            <b>Frequenzy</b>
                            <p>Every <b>3</b> days</p>
                        </div>
                        <div className="dataBox">
                            <b>Time To do</b>
                            <p>45 minutes</p>
                        </div>
                        <div className="dataBox">
                            <b>Times completed</b>
                            <p>5</p>
                        </div>
                    </div>
                    <div className="descBox">
                        <b>Description:</b>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vitae voluptatibus velit officiis excepturi quo itaque debitis suscipit ex optio!</p>
                    </div>
                </div>

                <div className="oneTaskData">
                    <div className="taskName">
                        <h4>Task name</h4>
                        <div className="optionsBtns">
                            <b>deleteBtn</b>
                            <b>addBtn</b>
                        </div>
                    </div>
                    <div className="smallData">
                        <div className="dataBox">
                            <b>Frequenzy</b>
                            <p>Every <b>3</b> days</p>
                        </div>
                        <div className="dataBox">
                            <b>Time To do</b>
                            <p>45 minutes</p>
                        </div>
                        <div className="dataBox">
                            <b>Times completed</b>
                            <p>5</p>
                        </div>
                    </div>
                    <div className="descBox">
                        <b>Description:</b>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vitae voluptatibus velit officiis excepturi quo itaque debitis suscipit ex optio!</p>
                    </div>
                </div>

            </div>
            <div className="one-category">
                <h2>Task category</h2>
                <div className="oneTaskData">
                    <div className="taskName">
                        <h4>Task name</h4>
                        <b>deleteBtn</b>
                    </div>
                    <div className="smallData">
                        <div className="dataBox">
                            <b>Frequenzy</b>
                            <p>Every <b>3</b> days</p>
                        </div>
                        <div className="dataBox">
                            <b>Time To do</b>
                            <p>45 minutes</p>
                        </div>
                        <div className="dataBox">
                            <b>Times completed</b>
                            <p>5</p>
                        </div>
                    </div>
                    <div className="descBox">
                        <b>Description:</b>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vitae voluptatibus velit officiis excepturi quo itaque debitis suscipit ex optio!</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}