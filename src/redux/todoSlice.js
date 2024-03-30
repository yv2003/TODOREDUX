import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};
//creates slices of state
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random().toString(36).substring(2, 15), // Generate unique ID
        text: action.payload,
        completed: false,
      });
    },//adds each tasks
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },//delete the todo/task
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
