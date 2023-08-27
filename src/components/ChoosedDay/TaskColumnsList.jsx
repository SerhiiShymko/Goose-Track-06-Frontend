import { TaskContainer } from './ChoosedDay.styled';

import { useState } from 'react';
import TaskColumnToDo from './TaskColumnToDo';
import TaskColumnInProg from './TaskColumnsInProg';
import TaskColumnDone from './TaskColumnDone';
import { CATEGORY } from "../../data/constants";

const TaskColumnsList = () => {
  const [task, setTask] = useState([
    {
      category: 'to-do',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'high',
    },
    {
      category: 'in-progress',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'medium',
    },
    {
      category: 'done',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'low',
    },
    {
      category: 'in-progress',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'low',
    },
    {
      category: 'in-progress',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'higd',
    },
    {
      category: 'to-do',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'low',
    },
    // {
    //   category: 'to-do',
    //   text: 'bla bla bla bla',
    //   time: '2023/08/25',
    //   priority: 'higd',
    // },
    // {
    //   category: 'to-do',
    //   text: 'bla bla bla bla',
    //   time: '2023/08/25',
    //   priority: 'medium',
    // },
  ]); 

  const categoryTodo = task.filter(task => task.category === CATEGORY.TODO);
  const categoryInProg = task.filter(task => task.category === CATEGORY.INPROGRESS);
  const categoryDone = task.filter(task => task.category === CATEGORY.DONE);
 

  return (
    <TaskContainer>
      <TaskColumnToDo data={categoryTodo} />
      <TaskColumnInProg data={categoryInProg} />
      <TaskColumnDone data={categoryDone} />
    </TaskContainer>
  );
};

export default TaskColumnsList;
