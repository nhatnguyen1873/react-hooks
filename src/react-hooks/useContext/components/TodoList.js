import { memo, useRef, useEffect } from "react";
import { useStore, actions } from "../store";

function TodoList() {
  const [state, dispatch] = useStore();
  const { todo, editTodo, todos, editIndex } = state;
  const todoInputRef = useRef();
  const editTodoInputRef = useRef();
  const timeoutRef = useRef();
  console.log("--- render TodoList ---");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(actions.addTodo(todo));
      dispatch(actions.setTodo(""));
      todoInputRef.current.focus();
    }
  };

  const handleDeleteTodo = (index) => {
    dispatch(actions.deleteTodo(index));
  };

  const handleStartEditTodo = (todo, index) => {
    dispatch(actions.startEditTodo(index));
    dispatch(actions.editTodo(todo));
    timeoutRef.current = setTimeout(() => {
      console.log(editTodoInputRef.current);
      editTodoInputRef.current.focus();
    }, 0);
  };

  const handleEditTodo = (todo) => {
    dispatch(actions.editTodo(todo));
  };

  const handleEndEditTodo = () => {
    dispatch(actions.endEditTodo());
    dispatch(actions.editTodo(""));
  };

  return (
    <>
      <input
        ref={todoInputRef}
        value={todo}
        onChange={(e) => dispatch(actions.setTodo(e.target.value))}
        onKeyUp={(e) => e.key === "Enter" && handleAddTodo()}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>ADD</button>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              onDoubleClick={() => handleStartEditTodo(todo, index)}
            >
              {index === editIndex ? (
                <input
                  ref={editTodoInputRef}
                  value={editTodo}
                  onChange={(e) => handleEditTodo(e.target.value)}
                  onKeyUp={(e) => e.key === "Enter" && handleEndEditTodo()}
                  onBlur={() => handleEndEditTodo()}
                />
              ) : (
                <>
                  {todo}{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteTodo(index)}
                  >
                    &times;
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default memo(TodoList);
