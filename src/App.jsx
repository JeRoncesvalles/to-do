import React, { useState } from 'react';
import './App.css'
function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}className='BT'>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}<br/>
            <button onClick={() => handleRemoveTodo(index)}className='BTN'>Remove</button>
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;