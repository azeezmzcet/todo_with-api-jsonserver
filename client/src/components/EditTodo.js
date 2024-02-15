// EditTodo.js
import React, { useState } from 'react';

const EditTodo = ({ todo, setEditing }) => {
  const [title, setTitle] = useState(todo.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      // Handle update
      setEditing(false);
    }
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit">Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default EditTodo;
