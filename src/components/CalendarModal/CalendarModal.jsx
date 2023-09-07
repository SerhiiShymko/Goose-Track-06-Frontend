import { Button } from '@mui/material';
import {
  CalendarDate,
  CalendarTable,
  Caption,
  DataText,
  Day,
  ImgPaginatorNext,
  ImgPaginatorPrev,
  ModalCalendar,
  WeekDays,
} from './CalendarModal.styled';
import { addDays, format, startOfWeek } from 'date-fns';
import { nanoid } from 'nanoid';
import { Link, useLocation } from 'react-router-dom';
import { selectCurrentDate } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const CalendarModal = ({
  onNext,
  onPrev,
  dateToday,
  dayInterval,
  onClickDate,
  activePeriod,
}) => {
  const location = useLocation();
  const currentDate = useSelector(selectCurrentDate);

  const startDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(format(addDays(startDayOfWeek, day), 'EEEEE'));
  }

  let typeOfDay;
  const resultDate = dayInterval.map(day => {
    if (format(day, 'MMMM yyyy') !== dateToday) {
      return <div key={day.toString()}></div>;
    } else {
      if (format(day, 'd MMMM') === format(currentDate, 'd MMMM')) {
        typeOfDay = 'active';
      } else if (format(day, 'E') === 'Sat' || format(day, 'E') === 'Sun') {
        typeOfDay = 'holiday';
      } else {
        typeOfDay = 'ordinary';
      }

      return (
        <CalendarDate
          key={day.toString()}
          onClick={onClickDate}
          data-day={format(day, 'yyyy-MM-dd')}
          $typeOfDay={typeOfDay}
        >
          {location.pathname === '/statistics' ? (
            <Link>{format(day, 'd')}</Link>
          ) : activePeriod === 'day' ? (
            <Link to={`day/${format(day, 'yyyy-MM-dd')}`}>
              {format(day, 'd')}
            </Link>
          ) : (
            <Link to={`month/${format(day, 'yyyy-MM')}`}>
              {format(day, 'd')}
            </Link>
          )}
        </CalendarDate>
      );
    }
  });

  return (
    <ModalCalendar>
      <Caption>
        <Button onClick={onPrev}>
          <ImgPaginatorPrev />
        </Button>
        <DataText>{dateToday}</DataText>
        <Button onClick={onNext}>
          <ImgPaginatorNext />
        </Button>
      </Caption>
      <WeekDays>
        {weekDays.map(day => (
          <Day key={nanoid()}>{day}</Day>
        ))}
      </WeekDays>

      <CalendarTable $columnsCount={dayInterval.length > 35 ? 6 : 5}>
        {resultDate}
      </CalendarTable>
    </ModalCalendar>
  );
};
