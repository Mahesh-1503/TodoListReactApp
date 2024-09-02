import React from 'react';
import PropTypes from 'prop-types';

function TaskItem({ task, index, toggleComplete, deleteTask }) {
  return (
    <div className="task-item">
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#888' : '#000'
        }}
        onClick={() => toggleComplete(index)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

// Prop types
TaskItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default TaskItem;
