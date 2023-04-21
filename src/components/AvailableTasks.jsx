import React from "react";
import CategoryTaskBox from "./CategoryTaskBox";


function AvailableTasks({listOfTasks}) {
    return (
        //map thorugh listOfTasks and create a CategoryTaskBox for each
        <div>
            {listOfTasks.map((taskObject) => {
                return (
                    <CategoryTaskBox taskObject={taskObject} />
                )
            }
            )}
        </div>
    )
}

export default AvailableTasks;