import { TaskContainer } from './ChoosedDay.styled';

import { useState } from 'react';
import TaskColumnToDo from './TaskColumnToDo';
import TaskColumnInProg from './TaskColumnsInProg';
import TaskColumnDone from './TaskColumnDone';
import { CATEGORY } from "../../data/constants";

const TaskColumnsList = () => {
  const [task, setTask] = useState([
    {
      _id: '01',
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
      _id: '02',
    },
    {
      category: 'done',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'low',
      _id: '03',
    },
    {
      category: 'in-progress',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'low',
      _id: '04',
    },
    {
      category: 'in-progress',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'higd',
      _id: '05',
    },
    {
      category: 'to-do',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'low',
      _id: '06',
    },
    {
      category: 'to-do',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'higd',
      _id: '07',
    },
    {
      category: 'to-do',
      text: 'bla bla bla bla',
      time: '2023/08/25',
      priority: 'medium',
      _id: '08',
    },
  ]); 

  const categoryTodo = task.filter(task => task.category === CATEGORY.TODO);
  const categoryInProg = task.filter(task => task.category === CATEGORY.INPROGRESS);
  const categoryDone = task.filter(task => task.category === CATEGORY.DONE);

  const handleChangeCategory = (id, category) => {
    console.log(id, category);
    const changeTask = task.filter(task => task._id === id);
    console.log(changeTask);
    changeTask[0].category = category;
    console.log(changeTask);
    setTask([...task,changeTask]);
 }

  return (
    <TaskContainer>
      <TaskColumnToDo data={categoryTodo} changeTask={handleChangeCategory} />
      <TaskColumnInProg
        data={categoryInProg}
        changeTask={handleChangeCategory}
      />
      <TaskColumnDone data={categoryDone} changeTask={handleChangeCategory} />
    </TaskContainer>
  );
};

export default TaskColumnsList;
