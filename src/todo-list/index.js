import { memo, useReducer, useRef, useEffect } from "react";
import reducer, { initialState } from "./reducer";
import logger from "./logger";
import { setTodo, addTodo, deleteTodo } from "./actions";

function TodoList() {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  const { todos, todo } = state;
  const todoInputRef = useRef();
  console.log("render TodoList");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo(todo));
      dispatch(setTodo(""));
      todoInputRef.current.focus();
    }
  };

  const handlePressEnter = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (index) => dispatch(deleteTodo(index));

  return (
    <>
      <input
        autoFocus
        ref={todoInputRef}
        value={todo}
        placeholder="Enter todo"
        onChange={(e) => dispatch(setTodo(e.target.value))}
        onKeyUp={(e) => handlePressEnter(e)}
      />
      <button onClick={handleAddTodo}>ADD</button>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo}{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeleteTodo(index)}
                >
                  &times;
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default memo(TodoList);
