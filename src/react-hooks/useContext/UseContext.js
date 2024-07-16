import { memo } from "react";
import { StoreProvider } from "./store";
import TodoList from "./components/TodoList";

function UseContext() {
  return (
    <StoreProvider>
      <TodoList />
    </StoreProvider>
  );
}

export default memo(UseContext);
