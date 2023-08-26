import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-06-backend.onrender.com/api/';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (choosedMonth, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks?choosedMonth=${choosedMonth}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', task);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ _id, ...task }, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${_id}`, task);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${_id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
