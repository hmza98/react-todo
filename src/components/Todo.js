import React, { useState } from "react";

const Todo = (props) => {
  const [update, setTodoUpdate] = useState(false);
  const [id, setId] = useState("");
  const [text, setText] = useState("");

  const handleEdit = (id, text) => {
    setTodoUpdate(!update);
    setId(id);
    setText(text);
  };

  const updateText = (e) => {
    setText(e.target.value);
  };

  const ApplyUpdate = () => {
    props.editTodo(id, text);
    setTodoUpdate(!update);
    setId("");
    setText("");
  };

  return (
    <div className="todo-item">
      {update ? (
        <input
          className="todo-input update"
          value={text}
          onChange={updateText}
        />
      ) : (
        <p>{props.todoItem.text}</p>
      )}
      {update ? (
        <button className="todo-edit" onClick={ApplyUpdate}>
          Update{" "}
        </button>
      ) : (
        <div>
          <button
            className="todo-delete"
            onClick={() => props.deleteTodoItem(props.todoItem.index)}
          >
            X
          </button>
          <button
            className="todo-edit"
            onClick={() =>
              handleEdit(props.todoItem.index, props.todoItem.text)
            }
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
