// TodoItem.js
import React, { useState } from 'react';
import EditTodo from './EditTodo';

const TodoItem = ({ todo, deleteTodo }) => {
  const [editing, setEditing] = useState(false);

  const handleToggle = () => {
    // Handle toggling completion status
  };

  const handleDelete = () => {
    // Handle deletion
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <li>
      {editing ? (
        <EditTodo todo={todo} setEditing={setEditing} />
      ) : (
        <div>
          <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
          <span>{todo.title}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
