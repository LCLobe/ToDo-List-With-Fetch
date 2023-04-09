import React from "react";

const Task = ({task, todos, onSet})=>{
    
    const closeTask = (event)=>{
        const idOfTaskToDelete = event.target.parentNode.id //Navigating DOM from button to Div#id

        const tempArray = todos.filter((element)=>{
            
            if (element.id == idOfTaskToDelete) return false;
            return true;
        })
        onSet(()=>tempArray);
    }

    return (
        <div className="task-wrapper" id={task.id}>
            <p className="task-text">{task.label}</p>
            <button className="task-button task-text" onClick={closeTask}>X</button>
        </div>
    )
}

export default Task;

//<button className="task-button" onClick={closeTask}><span className="task-text">X</span></button>