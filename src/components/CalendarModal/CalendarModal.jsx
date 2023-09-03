import { Button } from '@mui/material';
import {
  ActiveCalendarDate,
  CalendarDate,
  CalendarDateHolidays,
  CalendarTable,
  CalendarTableShortMonth,
  Caption,
  DataText,
  Day,
  ImgPaginatorPrev,
  ModalCalendar,
  WeekDays,
} from './CalendarModal.styled';
import {
  ImgPaginatorNextModal
} from 'components/CalendarToolBar/CalendarToolBar.styled';
import Prev from '../../images/calendar/chevron-left.svg';
import Next from '../../images/calendar/chevron-right.svg';
import { addDays, format, startOfWeek } from 'date-fns';
import { nanoid } from 'nanoid';

export const CalendarModal = ({ onNext, onPrev, dateToday, dayInterval }) => {
  const startDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(format(addDays(startDayOfWeek, day), 'EEEEE'));
  }
  
  const resultDate = dayInterval.map(day => {
    if (format(day, 'MMMM yyyy') !== dateToday) {
      return <div key={day.toString()}></div>;
    } else if (format(day, 'd MMMM') === format(new Date(), 'd MMMM')) {
      return (
        <ActiveCalendarDate key={day.toString()}>
          {format(day, 'd')}
        </ActiveCalendarDate>
      );
    }
    if (format(day, 'E') === 'Sat' || format(day, 'E') === 'Sun') {
      return (
        <CalendarDateHolidays key={day.toString()}>
          {format(day, 'd')}
        </CalendarDateHolidays>
      );
    } else {
      return (
        <CalendarDate key={day.toString()}>{format(day, 'd')}</CalendarDate>
      );
    }
  });

  return (
    <ModalCalendar>
      <Caption>
        <Button onClick={onPrev}>
          <ImgPaginatorPrev src={Prev} alt="prev" width={18} height={18} />
        </Button>
        <DataText>{dateToday}</DataText>
        <Button onClick={onNext}>
          <ImgPaginatorNextModal src={Next} alt="next" width={18} height={18} />
        </Button>
      </Caption>
      <WeekDays>
        {weekDays.map(day => (
          <Day key={nanoid()}>{day}</Day>
        ))}
      </WeekDays>
      {dayInterval.length > 35 ? (
        <CalendarTable>{resultDate}</CalendarTable>
      ) : (
        <CalendarTableShortMonth>{resultDate}</CalendarTableShortMonth>
      )}
    </ModalCalendar>
  );
};
