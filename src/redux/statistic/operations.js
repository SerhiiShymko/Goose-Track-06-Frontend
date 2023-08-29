import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTasksByDate = createAsyncThunk(
  'tasks/getTasksByDate',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks?choosedMonth=${date}`);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
