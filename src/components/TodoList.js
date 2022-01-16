import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function Todolist() {
  const [taskList, setTaskList] = useState([]);

  const addTodoItem = (item) => {
    if (item.text.length < 1) {
      return;
    }

    const tmpArray = [item, ...taskList];
    setTaskList(tmpArray);
  };

  const deleteTodoItem = (id) => {
    const tmpArray = taskList.filter((item) => item.index !== id);
    setTaskList(tmpArray);
  };

  const editTodo = (id, text) => {
    if (text.length > 1) {
      taskList.map((item) => {
        if (item.index === id) {
          item.text = text;
        }
      });
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodoItem={addTodoItem} />
      {taskList.map((todo) => (
        <Todo
          key={todo.index}
          todoItem={todo}
          deleteTodoItem={deleteTodoItem}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default Todolist;
