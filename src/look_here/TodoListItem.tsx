import React from "react";
import {TodoType} from "./index";

type TodoProps = { content: TodoType };
const TodoListItem: React.FC<TodoProps> = ({content,}) => {

    return (
        <div style={{width: 200, height: 200, margin:10, display: "flex", flexDirection: "column", borderStyle:"solid", borderWidth:2}}>
            <h3 style={{marginBottom:-5}}>Title</h3>
            <p>{content.title}</p>
            <h3 style={{marginBottom:-5}}>Description</h3>
            <p>{content.description}</p>

        </div>
    )
}

export default TodoListItem;