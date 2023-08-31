import {  useDispatch,useSelector } from 'react-redux';
import { ButtonAddTask, TaskContainer } from './ChoosedDay.styled';

import { fetchTasks, addTask } from '../../redux/tasks/operations';

import TaskColumnToDo from './TaskColumns/TaskColumnToDo';
import TaskColumnInProg from './TaskColumns/TaskColumnsInProg';
import TaskColumnDone from './TaskColumns/TaskColumnDone';
import { CATEGORY } from '../../data/constants';

import {selectTasks} from '../../redux/tasks/selectors'

const TaskColumnsList = date => {

  // const currentDate = date;
  const currentDate = '2023-08-30';
  const currentDay = currentDate.split('-')[2];
  
  const dispatch = useDispatch();
  
  
  const selectedDate = currentDate.slice(0, 7);
  dispatch(fetchTasks(selectedDate));
  // const tasks = useSelector(selectTasks);
  // console.log(tasks);
  
  // const task = useSelector(fetchTasks);
  // const parametr = task.map(einTask => {
  //   console.log(einTask);
  // })

  
  
  // const currentMonthTasks = task;
  // const currentDayTasks = currentMonthTasks.filter(
  //   day => day.date.split('-')[2] === currentDay
  // );

  // const categoryTodo = currentDayTasks.filter(
  //   task => task.category === CATEGORY.TODO
  // );
  // const categoryInProg = currentDayTasks.filter(
  //   task => task.category === CATEGORY.INPROGRESS
  // );
  // const categoryDone = currentDayTasks.filter(
  //   task => task.category === CATEGORY.DONE
  // );

  // const handleChangeCategory = (id, category) => {
  //   const changeTask = task.filter(task => task._id === id);

  //   changeTask[0].category = category;

  //   setTask([...task, changeTask]);
  // };

// const newTask={   
//     title: "Task bla bla",
//     date: "2023-08-30",
//     start: "09:00",
//     end: "15:00",
//     priority: "low",
//     category: "done",    
//   }
//   const hendlerAddTask = () => {
//     dispatch(addTask(newTask));
// }

  return (
    <TaskContainer>
      
      <TaskColumnToDo
      // data={categoryTodo}
      />
      <TaskColumnInProg
      // data={categoryInProg}
      />
      <TaskColumnDone
      // data={categoryDone}
      />
    </TaskContainer>
  );
};

export default TaskColumnsList;

// changeTask={handleChangeCategory}  changeTask={handleChangeCategory}  changeTask={handleChangeCategory}
