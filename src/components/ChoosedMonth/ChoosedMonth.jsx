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
  add,
} from 'date-fns';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/operations';
import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';


export const ChoosedMonth = ({ dayInterval, onNext, onPrev, dateToday, handleClick }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.tasks.items)
  const currentDate = format(new Date(dateToday), `yyyy-MM`);
  console.log(currentDate)
  

  let firstDayCurrentMonth = parse(dateToday, 'MMMM yyyy', new Date());
  // const dateFormat = format(firstDayCurrentMonth, 'yyyy-MM', new Date());

  const lastMonth = format(
    add(firstDayCurrentMonth, { months: -1 }),
    'yyyy-MM'
  );

  useEffect(() => {
    dispatch(fetchTasks(lastMonth));
  }, [dispatch, lastMonth]);
  

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

  

  const resultDate = dayInterval.map(day => {
    if (format(day, 'yyyy-MM') !== currentDate) {
      return <EmptyDateBlock key={day.toString()}></EmptyDateBlock>;
    } else if (format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')) {
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
      {dayInterval.length > 35 ? (
        <CalendarTable>{resultDate}</CalendarTable>
      ) : (
        <CalendarTableShortMonth>{resultDate}</CalendarTableShortMonth>
      )}
    </>
  );
};
