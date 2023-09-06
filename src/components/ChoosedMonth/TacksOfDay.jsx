import React from 'react';
import { Element, ListOfElements } from './TacksOfDay.styled';

function TacksOfDay({ currentDay, tasks }) {
  const tasksOfDay = tasks.filter(task => task.date === currentDay);

  return (
    <ListOfElements>
      {tasksOfDay.map(task => (
        <Element key={task._id} $priority={task.priority}>
          {task.title}
        </Element>
      ))}
    </ListOfElements>
  );
}

export default TacksOfDay;
