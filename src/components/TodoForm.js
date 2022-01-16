import React, { useState } from "react";

function TodoForm(props) {
  const [inputVal, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      index: Math.floor(Math.random() * 500),
      text: inputVal,
    };
    props.addTodoItem(item);
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input className="todo-input" value={inputVal} onChange={handleChange} />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default TodoForm;
