// import { createSelector } from '@reduxjs/toolkit';

export const selectReviews = state => state.reviews.items;
export const selectOwnReview = state => state.reviews.own;
export const selectIsLoading = state => state.reviews.isLoading;
export const selectError = state => state.reviews.error;
