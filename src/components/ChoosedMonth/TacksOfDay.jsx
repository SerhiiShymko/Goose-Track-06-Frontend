import React from 'react';

function TacksOfDay({ currentDay, tasks }) {
  const tasksOfDay = tasks.filter(task => task.date === currentDay);

  return (
    <div>
      {tasksOfDay.map(task => (
        <div key={task._id}>{task.title}</div>
      ))}
    </div>
  );
}

export default TacksOfDay;
