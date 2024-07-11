import { useState } from "react";

const TODOS_KEY = "todos";

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    return todos || [];
  });
  const [todo, setTodo] = useState("");
  const handleAddTodo = () => {
    if (todo) {
      setTodos((prevTodos) => {
        const newTodos = [...prevTodos, todo];
        localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
        return newTodos;
      });
      setTodo("");
    }
  };
  const handleRemoveTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((_, i) => i !== index);
      localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
      return newTodos;
    });
  };
  const handlePressEnter = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        onKeyUp={handlePressEnter}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={handleAddTodo} style={{ marginLeft: "4px" }}>
        Add
      </button>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}{" "}
              <span
                onClick={() => handleRemoveTodo(index)}
                style={{ cursor: "pointer" }}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "GrayText", fontSize: "14px" }}>No todos</p>
      )}
    </>
  );
}
