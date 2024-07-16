import * as actionTypes from "./actionTypes";

export const initialState = {
  todo: "",
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TODO: {
      return { ...state, todo: action.payload };
    }
    case actionTypes.ADD_TODO: {
      const newTodo = action.payload;
      return { ...state, todos: [...state.todos, newTodo] };
    }
    case actionTypes.DELETE_TODO: {
      const deleteIndex = action.payload;
      const newTodos = state.todos.filter((_, index) => index !== deleteIndex);
      return { ...state, todos: newTodos };
    }
    default: {
      throw new Error("Invalid action type");
    }
  }
};

export default reducer;
