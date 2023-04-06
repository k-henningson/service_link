import React from "react";
import { TodoType } from "./index";
import { useState, useCallback } from "react";

type TodoProps = {
  content: TodoType;
  handleSubmit: (editedTodo: TodoType) => void;
};
const SelectedTodo: React.FC<TodoProps> = ({ content, handleSubmit }) => {
  const [title, setTitle] = React.useState<string | undefined>(undefined);
  const [description, setDescription] = React.useState<string | undefined>(
    undefined
  );

  const handleClick = React.useCallback(() => {
    if (title !== undefined && description !== undefined) {
      handleSubmit({
        title: title,
        description: description,
        id: content.id,
      });
    }
    console.log("No title or description");
  }, []);

  return (
    <div
      style={{
        width: 200,
        height: 400,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Selected Todo</h2>
      <label style={{ display: "flex", flexDirection: "column" }}>
        Title
        <input
          onChange={(event) => {
            console.log(event.target.value);
            setTitle(event.target.value);
          }}
          defaultValue={content.title}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column" }}>
        Description
        <input
          onChange={(event) => {
            console.log(event.target.value);
            setDescription(event.target.value);
          }}
          defaultValue={content.description}
        />
      </label>

      <button
        onClick={() => {
          handleClick();
        }}
        style={{ marginTop: 5 }}
      >
        Save Data
      </button>
    </div>
  );
};
export default SelectedTodo;
