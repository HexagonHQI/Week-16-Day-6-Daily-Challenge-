import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state for the tasks
const initialState = {
  tasks: {} // Object to hold tasks by date
};

// Create a slice for tasks
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasks[date]) {
        state.tasks[date] = [];
      }
      state.tasks[date].push(task);
    },
    editTask: (state, action) => {
      const { date, taskId, newText } = action.payload;
      const tasks = state.tasks[date];
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        task.text = newText;
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state.tasks[date] = state.tasks[date].filter(t => t.id !== taskId);
    }
  }
});

// Export actions for use in components
export const { addTask, editTask, deleteTask } = taskSlice.actions;

// Configure and export the store
const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer
  }
});

export default store;
