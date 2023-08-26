import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;

// export const selectFilter = state => state.filter;

// export const selectFilteredTasks = createSelector(
//   [selectFilter, selectTasks],
//   (filter, tasks) => {
//     if (filter) {
//       const normalizedFilter = filter.toLowerCase();
//       return tasks.filter(task =>
//         task.name.toLowerCase().includes(normalizedFilter)
//       );
//     } else {
//       return tasks;
//     }
//   }
// );
