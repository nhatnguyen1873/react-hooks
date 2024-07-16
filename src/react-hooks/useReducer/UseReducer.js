import { memo } from "react";
import TodoList from "./todo-list";

function UseReducer() {
  return <TodoList />;
}

export default memo(UseReducer);
