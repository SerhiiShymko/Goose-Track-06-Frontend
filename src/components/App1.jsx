import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, updateUser } from 'redux/auth/operations';
import {
  addReview,
  deleteReview,
  fetchOwnReview,
  fetchReviews,
  updateReview,
} from 'redux/reviews/operations';
import {
  addTask,
  deleteTask,
  fetchTasks,
  updateTask,
} from 'redux/tasks/operations';

export function App1() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const object = {
    //   _id: '64ea3db74e02deb3125b2a94',
    //   title: 'Task1',
    //   date: '2023-08-26',
    //   start: '09:00',
    //   end: '15:00',
    //   priority: 'high',
    //   category: 'in-progress',
    // };

    const object = {
      email: 'KaterynaHilcher@gmail.com',
      password: '123456',
    };

    dispatch(deleteTask('64e8e239bb4d091802fc95ff')).then(result =>
      console.log(result)
    );
  }, [dispatch]);

  return (
    <div>
      <h1>Головна сторінка</h1>
    </div>
  );
}
