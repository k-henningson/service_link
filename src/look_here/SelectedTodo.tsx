import React from "react";
import {TodoType} from "./index";

type TodoProps = { content: TodoType };
const SelectedTodo: React.FC<TodoProps> = ({content}) => {


    return (
        <div style={{width: 200, height: 400, display: "flex", flexDirection: "column"}}>
            <h2>Selected Todo</h2>
            <label style={{display: "flex", flexDirection: "column"}}>Title
                <input defaultValue={content.title}/>
            </label>
            <label style={{display: "flex", flexDirection: "column"}}>Description
                <input defaultValue={content.description}/>
            </label>

            <button style={{marginTop: 5}}>Save Data</button>

        </div>
    )
}
// when a TodoListItem is selected, make it visually differentiable to the rest of the items in the list. This way the user knows what they are editing.
export default SelectedTodo;