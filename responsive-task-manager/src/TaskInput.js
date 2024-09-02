import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');  // Clear input after adding task
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

// Prop types
TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default TaskInput;
