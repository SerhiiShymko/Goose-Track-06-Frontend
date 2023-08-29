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
} from 'date-fns';

import {
  ModalCalendar,
  Caption,
  Button,
  WeekDays,
  Day,
  DataText,
  CalendarTable,
  CalendarDate,
  ActiveCalendarDate
} from './CalendarToolBar.styled';
import { Container } from 'styles/Container';
import Prev from '../../images/calendar/chevron-left.svg';
import Next from '../../images/calendar/chevron-right.svg';
import Line from '../../images/calendar/Separator.svg';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const CalendarToolbar = () => {
  const date = format(new Date(), 'MMMM yyyy');
  const [selectedDate, setSelectedDate] = useState(date);
  const [activeDate, setActiveDate] = useState(date);

  const startDayOfMonth = startOfMonth(new Date());
  const startDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const endDayOfMonth = endOfMonth(new Date());
  const endDayOfWeek = endOfWeek(new Date(), { weekStartsOn: 1 });
 

  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(format(addDays(startDayOfWeek, day), 'EEEEE'));
  }

 const result = eachDayOfInterval({
    start: startDayOfMonth,
    end: endDayOfMonth,
 });

  return (
    <Container>
      <button type="button">{activeDate}</button>
      <ModalCalendar>
        <Caption>
          <Button
            onClick={() =>
              setActiveDate(format(subMonths(new Date(), 1), 'MMMM yyyy'))
            }
          >
            <img src={Prev} alt="prev" width={18} height={18} />
          </Button>
          <DataText>{activeDate}</DataText>
          <Button
            onClick={() =>
              setActiveDate(format(addMonths(new Date(), 1), 'MMMM yyyy'))
            }
          >
            <img src={Next} alt="next" width={18} height={18} />
          </Button>
        </Caption>
        <WeekDays>
          {weekDays.map(day => (
            <Day key={nanoid()}>{day}</Day>
          ))}
        </WeekDays>
        <CalendarTable>
          {result.map(day => {
            if (format(day, 'd MMMM') === format(new Date(), 'd MMMM')) {

             return <ActiveCalendarDate key={day.toString()}>{format(day, 'd')}</ActiveCalendarDate>
            }
            return <CalendarDate key={day.toString()}>{format(day, 'd')}</CalendarDate>
          })}
        </CalendarTable>
      </ModalCalendar>
    </Container>
  );
};
