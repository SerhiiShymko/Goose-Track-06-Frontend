import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
} from 'redux/tasks/operations';

// structure of items:
// [
//   {
//     "_id": "64e90804a67180aafb894854",
//     "title": "Task1",
//     "date": "2023-08-25",
//     "start": "09:00",
//     "end": "15:00",
//     "priority": "low",
//     "category": "to-do",
//     "owner": "64e88095ca6abac87e9fa9af"
//   }
// ];

const STATUS = {
  FULFILLED: 'fulfilled',
  PENDING: 'pending',
  REJECTED: 'rejected',
};

const actionGenerators = [fetchTasks, addTask, updateTask, deleteTask];

const getActionGeneratorsWithType = status =>
  actionGenerators.map(generator => generator[status]);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTasks.fulfilled, handleFetchTasks)
      .addCase(addTask.fulfilled, handleAddTask)
      .addCase(updateTask.fulfilled, handleUpdateTask)
      .addCase(deleteTask.fulfilled, handleDeleteTask)
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.PENDING)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.FULFILLED)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.REJECTED)),
        handleRejected
      );
  },
});

function handleFetchTasks(state, action) {
  state.items = action.payload;
}

function handleAddTask(state, action) {
  state.items = [action.payload, ...state.items];
}

function handleUpdateTask(state, action) {
  const items = state.items.filter(item => item._id !== action.payload._id);
  state.items = [action.payload, ...items];
}

function handleDeleteTask(state, action) {
  state.items = state.items.filter(item => item.id !== action.payload.id);
}

function handlePending(state, action) {
  state.isLoading = true;
  state.error = null;
}

function handleFulfilled(state, action) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const tasksReducer = tasksSlice.reducer;
