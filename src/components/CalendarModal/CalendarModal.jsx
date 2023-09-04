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
import { Link } from 'react-router-dom';

export const CalendarModal = ({
  onNext,
  onPrev,
  dateToday,
  dayInterval,
  handleClick,
  onClickDate
}) => {
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
        <ActiveCalendarDate key={day.toString()} onClick={onClickDate} data-day={format(day, 'yyyy-MM-dd')}>
          <Link to={`day/${format(day, 'yyyy-MM-dd')}`}>
            {format(day, 'd')}
            </Link>
        </ActiveCalendarDate>
      );
    }
    if (format(day, 'E') === 'Sat' || format(day, 'E') === 'Sun') {
      return (
        <CalendarDateHolidays key={day.toString()} onClick={onClickDate} data-day={format(day, 'yyyy-MM-dd')}>
          <Link to={`day/${format(day, 'yyyy-MM-dd')}`}>
            {format(day, 'd')}
            </Link>
        </CalendarDateHolidays>
      );
    } else {
      return (
        <CalendarDate onClick={onClickDate} key={day.toString()} data-day={format(day, 'yyyy-MM-dd')}>
          <Link to={`day/${format(day, 'yyyy-MM-dd')}`}>
            {format(day, 'd')}
            </Link>
        </CalendarDate>
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
