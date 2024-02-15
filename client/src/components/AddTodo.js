// AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} placeholder="Add todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
