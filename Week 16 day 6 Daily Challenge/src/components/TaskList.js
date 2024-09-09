import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem'; // Import TaskItem component

const TaskList = () => {
  const selectedDate = useSelector((state) => state.selectedDate);
  const tasks = useSelector((state) => state.tasks.tasks[selectedDate] || []);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
