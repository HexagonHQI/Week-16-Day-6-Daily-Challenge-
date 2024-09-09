import React from 'react';
import Calendar from 'c:/Users/jonat/OneDrive/Desktop/Week 16 day 6 Daily Challenge/src/components/calendar/components/Calendar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  return (
    <div>
      <h1>Daily Planner</h1>
      <Calendar />
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
