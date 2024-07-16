import * as actionTypes from "./actionTypes";

export const setTodo = (payload) => ({
  type: actionTypes.SET_TODO,
  payload,
});

export const addTodo = (payload) => ({
  type: actionTypes.ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: actionTypes.DELETE_TODO,
  payload,
});
