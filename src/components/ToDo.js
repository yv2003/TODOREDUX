//to add a todo in the list
import React from 'react';
import { useDispatch, } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();//used to call the reducers

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="todo">
      <li className={todo.completed ? 'completed' : ''}>{todo.text}</li>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Todo;
