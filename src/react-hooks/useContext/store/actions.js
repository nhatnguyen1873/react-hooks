import * as actionTypes from "./actionTypes";

const setTodo = (payload) => ({
  type: actionTypes.SET_TODO,
  payload,
});

const editTodo = (payload) => ({
  type: actionTypes.EDIT_TODO,
  payload,
});

const addTodo = (payload) => ({
  type: actionTypes.ADD_TODO,
  payload,
});

const startEditTodo = (payload) => ({
  type: actionTypes.START_EDIT_TODO,
  payload,
});

const endEditTodo = (payload) => ({
  type: actionTypes.END_EDIT_TODO,
  payload,
});

const deleteTodo = (payload) => ({
  type: actionTypes.DELETE_TODO,
  payload,
});

export { setTodo, editTodo, addTodo, startEditTodo, endEditTodo, deleteTodo };
