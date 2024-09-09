import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store'; // Import addTask action

const AddTask = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && date) {
      dispatch(addTask({ 
        date, 
        task: { id: Date.now(), text, completed: false } 
      }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
