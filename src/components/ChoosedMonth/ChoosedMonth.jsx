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
import { format, startOfWeek, addDays } from 'date-fns';

export const ChoosedMonth = ({
  dayInterval,
  onNext,
  onPrev,
  dateToday,
  firstDayCurrentMonth,
}) => {
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
    if (format(day, 'MMMM yyyy') === dateToday) {
      return format(day, 'd MMMM') === format(new Date(), 'd MMMM') ? (
        <DateCalendarMonth key={day.toString()}>
          <DateActive>{format(day, 'd')}</DateActive>
        </DateCalendarMonth>
      ) : (
        <DateCalendarMonth key={day.toString()}>
          <DateNoSelected>{format(day, 'd')}</DateNoSelected>
        </DateCalendarMonth>
      );
    } else {
      return <EmptyDateBlock key={day.toString()}></EmptyDateBlock>;
    }
  });

  return (
    <>
      <MonthCalendarHead>
        {renderDayOfWeek().map(day => {
          if (day === 'S') {
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
