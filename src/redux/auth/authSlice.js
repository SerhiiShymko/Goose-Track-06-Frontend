import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  updateUser,
  refreshUser,
} from 'redux/auth/operations';

const STATUS = {
  FULFILLED: 'fulfilled',
  PENDING: 'pending',
  REJECTED: 'rejected',
};

const actionGenerators = [register, logIn, updateUser];

const getActionGeneratorsWithType = status =>
  actionGenerators.map(generator => generator[status]);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      password: null,
      birthday: null,
      phone: null,
      skype: null,
      avatarURL: null,
    },
    token: null,
    theme: 'light',
    currentDate: Date.now(),
    isLoggedIn: false,
    isRefreshing: false,
  },

  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected)
      .addCase(logOut.fulfilled, handleLogOut)
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.FULFILLED)),
        handleUserLoggingFulfilled
      );
  },
});

function handleUserLoggingFulfilled(state, action) {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

function handleLogOut(state) {
  state.user = {
    name: null,
    email: null,
    password: null,
    birthday: null,
    phone: null,
    skype: null,
    avatarURL: null,
  };
  state.token = null;
  state.isLoggedIn = false;
}
function handleRefreshUserPending(state) {
  state.isRefreshing = true;
}

function handleRefreshUserFulfilled(state, action) {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
}

function handleRefreshUserRejected(state) {
  state.isRefreshing = false;
}

export const { setTheme, setCurrentDate } = authSlice.actions;
export const authReducer = authSlice.reducer;
