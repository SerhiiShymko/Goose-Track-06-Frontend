import { useEffect, useState } from "react";

/**
 * ==================================================================
 * Count task by all category
 * @param {Array<Objects>} dataUser
 * @param {Date} date
 * @returns {Object}
 */
export const countUserTasks = dataUser => {
  let toDo = 0;
  let inProgress = 0;
  let done = 0;

  for (const day of dataUser) {
    if (day.category === 'to-do') toDo++;

    if (day.category === 'in-progress') inProgress++;

    if (day.category === 'done') done++;
  }
  
  return { toDo, inProgress, done};
};

/**
 * ======================================================
 * Culculate sum of all tasks
 * @param {Object} tasks
 * @returns {Number}
 */
const sumAllTasks = tasks => {
  let allTasks = 0;

  const values = Object.values(tasks);

  for (const val of values) {
    allTasks += val;
  }
  return allTasks;
};
/**
 *===========================================================
 * @param {number} task
 * @param {number} allTasks
 * @returns {Rounded number}
 */
export const culcRoundPercentData = (task, allTasks) => {
  const data = Math.round((task / allTasks) * 100);

  return data
};

/**
 * ===============================================================
 * @param {Object} dataTasksByDay
 * @returns {Array<Objects>}
 */
export const culcStatistikData = (tasksByDay, tasksByMonth) => {
  const allTasksByDay = sumAllTasks(tasksByDay);
  const allTasksByMonth = sumAllTasks(tasksByMonth);
  
  return [
    {
      name: 'To Do',
      day: culcRoundPercentData(tasksByDay.toDo, allTasksByDay) || 0,
      month: culcRoundPercentData(tasksByMonth.toDo, allTasksByMonth) || 0,
    },
    {
      name: 'In Progress',
      day: culcRoundPercentData(tasksByDay.inProgress, allTasksByDay) || 0,
      month: culcRoundPercentData(tasksByMonth.inProgress, allTasksByMonth) || 0,
    },
    {
      name: 'Done',
      day: culcRoundPercentData(tasksByDay.done, allTasksByDay) || 0,
      month: culcRoundPercentData(tasksByMonth.done, allTasksByMonth) || 0,
    },
  ];
};

/**
 * Filter data by day
 */
export const FilterTasksByDay = (tasks, date) =>
  tasks.filter(task => task.date === date);

  const useResize = () => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      const getSize = () => setSize([window.innerWidth, window.innerHeight]);
      getSize();
      window.addEventListener('resize', getSize);
      return () => window.removeEventListener('resize', getSize);
    }, []);
    return size;
  };
  export default useResize;
