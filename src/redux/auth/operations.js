import { createAsyncThunk } from '@reduxjs/toolkit';

const { default: axios } = require('axios');

axios.defaults.baseURL = 'url';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk();

export const login = createAsyncThunk();

export const logOut = createAsyncThunk();

export const refresh = createAsyncThunk();
