import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchReviews,
  fetchOwnReview,
  addReview,
  updateReview,
  deleteReview,
} from 'redux/reviews/operations';

// structure of items:
// [
//    {
//         "comment": "Very cool app, everything is clear and functional. A great program for time chronology.",
//         "rating": "4",
//         "owner": {
//             "_id": "64e8eaa7fef0e529ac75335c",
//             "name": "Mykola Kapytaniuk",
//             "avatarURL": null
//         }
//     },
// ];

// structure of field "own":
//    {
//         "comment": "Very cool app, everything is clear and functional. A great program for time chronology.",
//         "rating": "4",
//     }

const STATUS = {
  FULFILLED: 'fulfilled',
  PENDING: 'pending',
  REJECTED: 'rejected',
};

const actionGenerators = [
  fetchReviews,
  fetchOwnReview,
  addReview,
  updateReview,
  deleteReview,
];

const getActionGeneratorsWithType = status =>
  actionGenerators.map(generator => generator[status]);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    items: [],
    own: null,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchReviews.fulfilled, handleFetchReviews)
      .addCase(fetchOwnReview.fulfilled, handleFetchOwnReview)
      .addCase(addReview.fulfilled, handleAddReview)
      .addCase(updateReview.fulfilled, handleUpdateReview)
      .addCase(deleteReview.fulfilled, handleDeleteReview)
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

function handleFetchReviews(state, action) {
  state.items = action.payload;
}

function handleFetchOwnReview(state, action) {
  state.own = action.payload;
}

function handleAddReview(state, action) {
  state.own = action.payload;
}

function handleUpdateReview(state, action) {
  state.own = action.payload;
}

function handleDeleteReview(state, action) {
  state.own = null;
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

export const reviewsReducer = reviewsSlice.reducer;
