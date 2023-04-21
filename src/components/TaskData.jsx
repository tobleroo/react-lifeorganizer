import React from "react";


export default function TaskData({task}) {
    
    return(
     <div>
        <h3>{task.taskName}</h3>
        <p>{task.timeToComplete}</p>
     </div>
    )
}