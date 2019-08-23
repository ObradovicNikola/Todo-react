import React from "react"

function TodoItem(props) {
    const doneStyle = {
        fontStyle: "italic",
        color: "lightslategrey",
        textDecoration: "line-through",
    }
    return(
        <div className="todo-item">            
            <input type="checkbox" checked={props.task.done} 
                onChange={() => props.handleChange(props.task.id)}></input>
            <p style={props.task.done ? doneStyle : null}>{props.task.taskTitle}</p>
        </div>
    )
} 

export default TodoItem