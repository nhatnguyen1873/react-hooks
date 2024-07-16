import * as actionTypes from "./actionTypes";

const initialState = {
  todo: "",
  editTodo: "",
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  editIndex: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TODO: {
      return { ...state, todo: action.payload };
    }
    case actionTypes.EDIT_TODO: {
      return { ...state, editTodo: action.payload };
    }
    case actionTypes.ADD_TODO: {
      const newTodos = [...state.todos, action.payload];
      return { ...state, todos: newTodos };
    }
    case actionTypes.START_EDIT_TODO: {
      return { ...state, editIndex: action.payload };
    }
    case actionTypes.END_EDIT_TODO: {
      const newTodos = [...state.todos];
      newTodos[state.editIndex] = state.editTodo;
      return { ...state, editIndex: null, todos: newTodos };
    }
    case actionTypes.DELETE_TODO: {
      const deleteIndex = action.payload;
      const newTodos = state.todos.filter((_, index) => index !== deleteIndex);
      return { ...state, todos: newTodos };
    }
    default:
      throw new Error("Invalid action type");
  }
};

export { initialState };
export default reducer;
