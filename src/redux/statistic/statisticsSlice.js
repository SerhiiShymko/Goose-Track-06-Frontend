// import { createSlice } from '@reduxjs/toolkit';
// import { getTasksByDate } from './operations';
// import { initialState } from './initialState';

// const STATUSES = {
//   PENDING: 'pending',
//   REJECTED: 'rejected',
//   FULFILLED: 'fulfilled',
// };

// const contactsSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   extraReducers: builder => {
//     const { PENDING, REJECTED, FULFILLED } = STATUSES;
//     builder
//       .addCase(getTasksByDate.fulfilled, getTasksByDateFULFILLED)
//       .addMatcher(createStatus(PENDING), handlePENDING)
//       .addMatcher(createStatus(REJECTED), handleREJECTED)
//       .addMatcher(createStatus(FULFILLED), handleFULFILLED);
//   },
// });

// export const phoneBookReducer = contactsSlice.reducer;

// const getTasksByDateFULFILLED = (state, action) => {
//   state.items = action.payload;
// };

// const createStatus = (status, action) => action[status];
  
//  const handlePENDING = state => {
//   state.isLoading = true;
// };

//  const handleREJECTED = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const handleFULFILLED = state => {
//     state.isLoading = false;
//     state.error = null;
// }