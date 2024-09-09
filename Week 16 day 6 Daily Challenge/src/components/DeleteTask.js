import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store'; // Import deleteTask action

const DeleteTask = ({ taskId, date }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ date, taskId }));
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteTask;
