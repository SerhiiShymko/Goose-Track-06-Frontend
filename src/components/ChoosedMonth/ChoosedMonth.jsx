import { useState } from 'react';
import {
  MonthCalendarHead,
  Day,
  DayHolidays,
  CalendarTable,
  DateCalendarMonth,
  DateActive,
  DateNoSelected,
} from './ChoosedMonth.styled';
import { nanoid } from 'nanoid';

import {
  endOfMonth,
  format,
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  endOfWeek,
  addDays,
  subMonths,
  addMonths,
  parseISO,
  parse,
  add,
} from 'date-fns';

export const ChoosedMonth = () => {
  const date = format(new Date(), 'MMMM yyyy');
  const [selectedDate, setSelectedDate] = useState(date);
  const [activeDate, setActiveDate] = useState(date);
  let firstDayCurrentMonth = parse(activeDate, 'MMMM yyyy', new Date());
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
    
  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setActiveDate(format(firstDayNextMonth, 'MMMM yyyy'));
  };

  const prevMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setActiveDate(format(firstDayNextMonth, 'MMMM yyyy'));
  };

  const result = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const resultDate = result.map(day =>
    format(day, 'd MMMM') === format(new Date(), 'd MMMM') ? (
      <DateCalendarMonth key={day.toString()}>
        <DateActive>{format(day, 'd')}</DateActive>
      </DateCalendarMonth>
    ) : (
      <DateCalendarMonth key={day.toString()}>
        <DateNoSelected>{format(day, 'd')}</DateNoSelected>
      </DateCalendarMonth>
    )
  );

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
      <CalendarTable>{resultDate}</CalendarTable>
    </>
  );
};
