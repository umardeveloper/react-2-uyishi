import React from "react";
import "./App.scss";

import Todo from "./Components/Todo/Todo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 0, title: "Buuu todo list", isCompleted: false },
    {
      id: 1,
      title: "Ustoz etkanlaride hamma narsa tododan boshlanadi",
      isCompleted: true,
    },
    { id: 2, title: "Prikolna da", isCompleted: true },
  ]);

  const handleDelete = (evt) => {
    const todoId = evt.target.dataset.todoId - 0;

    const filteredTodos = todos.filter((row) => row.id !== todoId);
    setTodos([...filteredTodos]);
  };

  return (
    <>
      <form className="form">
        <input
          className="input--text"
          onKeyUp={(evt) => {
            if (evt.code === "Enter" || evt.code === "Backspace") {
              const newTodo = {
                id: todos[todos.length - 1]?.id + 1 || 0,
                title: evt.target.value,
                isCompleted: false,
              };

              setTodos([...todos, newTodo]);
            }
          }}
          type="text"
          placeholder="todo..."
        />
        <ul>
          {todos.map((row) => (
            <Todo key={row.id} id={row.id} handleDelete={handleDelete}>
              {row.title}
              <input type="checkbox" className="checkbox" />
            </Todo>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
