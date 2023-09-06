import {
  MonthCalendarHead,
  DayHolidays,
  DateCalendarMonth,
  CalendarTable,
  Day,
  EmptyDateBlock,
  DayOfMonth,
} from './ChoosedMonth.styled';
import { nanoid } from 'nanoid';
import {
  format,
  startOfWeek,
  addDays,
  parse,
  // parseISO,
  // isValid,
  // add,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
  add,
} from 'date-fns';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchTasks } from 'redux/tasks/operations';
// import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/operations';
// import { selectTasks } from 'redux/tasks/selectors';
import { selectCurrentDate } from 'redux/auth/selectors';
import { selectTasks } from 'redux/tasks/selectors';
import TacksOfDay from './TacksOfDay';
import { setCurrentDate } from 'redux/auth/authSlice';

const ChoosedMonth = () => {
  const dispatch = useDispatch();
  // const location = useLocation();

  const tasks = useSelector(selectTasks);
  const selectDate = useSelector(selectCurrentDate);

  const formattedDate = format(selectDate, 'MMMM yyyy');
  let firstDayCurrentMonth = parse(formattedDate, 'MMMM yyyy', selectDate);

  const result = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });

  // const dateFormat = format(selectDate, 'yyyy-MM');

  const currentMonth = format(
    add(firstDayCurrentMonth, { months: 0 }),
    'yyyy-MM'
  );
  // console.log(currentMonth);

  useEffect(() => {
    dispatch(fetchTasks(currentMonth));
  }, [dispatch, currentMonth]);

  const startDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = [];

  const renderDayOfWeek = () => {
    for (let day = 0; day < 7; day++) {
      if (window.screen.width < 768) {
        weekDays.push(format(addDays(startDayOfWeek, day), 'EEEEE'));
      } else {
        weekDays.push(format(addDays(startDayOfWeek, day), 'EEE'));
      }
    }
    return weekDays;
  };

  const handleClick = choosedDay => {
    const dayTimeStamp = choosedDay.getTime();
    dispatch(setCurrentDate(dayTimeStamp));
  };

  const resultDate = result.map(day => {
    if (format(day, 'MMMM yyyy') !== formattedDate) {
      return <EmptyDateBlock key={day.toString()}></EmptyDateBlock>;
    } else {
      return (
        <DateCalendarMonth
          data-day={format(day, 'yyyy-MM-dd')}
          key={day.toString()}
          to={`/calendar/day/${format(day, 'yyyy-MM-dd')}`}
          onClick={() => handleClick(day)}
        >
          {format(day, 'd MMMM') === format(selectDate, 'd MMMM') ? (
            <DayOfMonth $active={true}>{format(day, 'd')}</DayOfMonth>
          ) : (
            <DayOfMonth $active={false}>{format(day, 'd')}</DayOfMonth>
          )}
          <TacksOfDay
            currentDay={format(day, 'yyyy-MM-dd')}
            tasks={tasks}
          ></TacksOfDay>
        </DateCalendarMonth>
      );
    }
  });

  // const taskResult = tasks.map(task => {
  //   return <div key={task._id}>{task}</div>;
  // });

  return (
    <>
      <MonthCalendarHead>
        {renderDayOfWeek().map(day => {
          if (day === 'Sat' || day === 'Sun') {
            return <DayHolidays key={nanoid()}>{day}</DayHolidays>;
          }
          return <Day key={nanoid()}>{day}</Day>;
        })}
      </MonthCalendarHead>
      {result.length > 35 ? (
        <CalendarTable $columnsCount={6}>{resultDate}</CalendarTable>
      ) : (
        <CalendarTable $columnsCount={5}>{resultDate}</CalendarTable>
      )}
    </>
  );
};

export default ChoosedMonth;
