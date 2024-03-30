//complete form
import React, { useState } from 'react';
import Todo from './ToDo';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const Todos = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };//on handleSubmit, it add the new todo to the list

  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="todos">
      <h2>Todos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
