import {
  MonthCalendarHead,
  DayHolidays,
  DateCalendarMonth,
  DateActive,
  DateNoSelected,
  CalendarTable,
  Day,
  EmptyDateBlock,
  CalendarTableShortMonth,
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
} from 'date-fns';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchTasks } from 'redux/tasks/operations';
// import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { useState } from 'react';

const ChoosedMonth = () => {
  // const dispatch = useDispatch();
  //  const items = useSelector(state => state.tasks.items)
  const date = format(new Date(), 'MMMM yyyy');
  const [activeDate] = useState(date);

  let firstDayCurrentMonth = parse(activeDate, 'MMMM yyyy', new Date());

  // const handleClick = e => {
  //   // const selectDate = e.currentTarget.dataset.day
  // };
  // const nextMonth = () => {
  //   let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
  //   setActiveDate(format(firstDayNextMonth, 'MMMM yyyy'));
  // };

  // const prevMonth = () => {
  //   let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
  //   setActiveDate(format(firstDayPrevMonth, 'MMMM yyyy'));
  // };

  const result = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });
  // const currentDate = format(new Date(dateToday), `yyyy-MM`);
  // console.log(currentDate)

  //   const dateFormat = format(firstDayCurrentMonth, 'yyyy-MM', new Date());
  // console.log(dateFormat)

  // const lastMonth = format(
  //   add(firstDayCurrentMonth, { months: -1 }),
  //   'yyyy-MM'
  // );

  // useEffect(() => {
  //   dispatch(fetchTasks(lastMonth));
  // }, [dispatch, lastMonth]);

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

  const resultDate = result.map(day => {
    if (format(day, 'MMMM yyyy') !== activeDate) {
      return <EmptyDateBlock key={day.toString()}></EmptyDateBlock>;
    } else if (format(day, 'd MMMM') === format(new Date(), 'd MMMM')) {
      return (
        <DateCalendarMonth key={day.toString()}>
          <DateActive>{format(day, 'd')}</DateActive>
        </DateCalendarMonth>
      );
    } else {
      return (
        <DateCalendarMonth key={day.toString()}>
          <DateNoSelected>{format(day, 'd')}</DateNoSelected>
        </DateCalendarMonth>
      );
    }
  });

  return (
    <>
      {/* <CalendarToolBar
        dayInterval={dateToday}
        onNext={onNext}
        onPrev={onPrev}
        dateToday={dateToday}
        onClickDate = {handleClick}
      /> */}
      <MonthCalendarHead>
        {renderDayOfWeek().map(day => {
          if (day === 'Sat' || day === 'Sun') {
            return <DayHolidays key={nanoid()}>{day}</DayHolidays>;
          }
          return <Day key={nanoid()}>{day}</Day>;
        })}
      </MonthCalendarHead>
      {result.length > 35 ? (
        <CalendarTable>{resultDate}</CalendarTable>
      ) : (
        <CalendarTableShortMonth>{resultDate}</CalendarTableShortMonth>
      )}
    </>
  );
};

export default ChoosedMonth;
