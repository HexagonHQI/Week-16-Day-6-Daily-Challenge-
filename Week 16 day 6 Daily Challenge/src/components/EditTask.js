import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../store'; // Import editTask action

const EditTask = ({ task }) => {
  const [newText, setNewText] = useState(task.text);
  const selectedDate = useSelector((state) => state.selectedDate);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({
      date: selectedDate,
      taskId: task.id,
      newText
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditTask;
