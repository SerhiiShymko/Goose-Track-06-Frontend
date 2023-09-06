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
import { ImgPaginatorNextModal } from 'components/CalendarToolBar/CalendarToolBar.styled';
import Prev from '../../images/calendar/chevron-left.svg';
import Next from '../../images/calendar/chevron-right.svg';
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
}) => {
  const location = useLocation();
  const currentDate = useSelector(selectCurrentDate);
  // const formattedDate = format(selectDate, 'yyyy-MM-dd')
  // const parseDate = parse(formattedDate, 'yyyy-MM-dd', new Date())
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
          ) : (
            <Link to={`day/${format(day, 'yyyy-MM-dd')}`}>
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

      <CalendarTable $columnsCount={dayInterval.length > 35 ? 6 : 5}>
        {resultDate}
      </CalendarTable>
    </ModalCalendar>
  );
};
