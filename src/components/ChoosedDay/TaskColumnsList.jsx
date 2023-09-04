import {  useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  TaskContainer } from './ChoosedDay.styled';

import { fetchTasks } from '../../redux/tasks/operations';

import TaskColumnToDo from './TaskColumns/TaskColumnToDo';
import TaskColumnInProg from './TaskColumns/TaskColumnsInProg';
import TaskColumnDone from './TaskColumns/TaskColumnDone';
import { CATEGORY } from '../../data/constants';

import {selectTasks} from '../../redux/tasks/selectors'

const TaskColumnsList = ({currentDate}) => {
  
  const currentDay = currentDate.split('-')[2];
  
  const dispatch = useDispatch();
  
  const selectedDate = currentDate.slice(0, 7);

  useEffect(() => {
    dispatch(fetchTasks(selectedDate));
  }, [dispatch, selectedDate]);
  // dispatch(fetchTasks(selectedDate));

  const tasks = useSelector(selectTasks);
  
  const currentDayTasks = tasks.filter(
    day => day.date.split('-')[2] === currentDay
    );
    
  const categoryTodo = currentDayTasks.filter(
    task => task.category === CATEGORY.TODO
  );
  const categoryInProg = currentDayTasks.filter(
    task => task.category === CATEGORY.INPROGRESS
  );
  const categoryDone = currentDayTasks.filter(
    task => task.category === CATEGORY.DONE
  );

  return (
    <TaskContainer>
      <TaskColumnToDo data={categoryTodo} currentDay={currentDate} />
      <TaskColumnInProg data={categoryInProg} currentDay={currentDate} />
      <TaskColumnDone data={categoryDone} />
    </TaskContainer>
  );
};

export default TaskColumnsList;