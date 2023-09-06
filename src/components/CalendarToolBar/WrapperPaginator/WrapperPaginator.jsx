import { CalendarModal } from 'components/CalendarModal/CalendarModal';
import {
  BtnPaginatorLeft,
  BtnPaginatorRight,
  ButtonForOpenCalendar,
  PeriodPaginator,
  WrapperPagination,
} from './WrapperPaginator.styled';
import { ImgPaginatorNext, ImgPaginatorPrev } from '../CalendarToolBar.styled';
import { useState } from 'react';
import Prev from '../../../images/calendar/chevron-left.svg';
import Next from '../../../images/calendar/chevron-left.svg';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/auth/selectors';

export const WrapperPaginator = ({
  dayInterval,
  onNext,
  onPrev,
  dateToday,
  onClickDate,
}) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const selectDate = useSelector(selectCurrentDate);

  const locationDay = location.pathname.slice(10, 13);

  const formattedDay = format(selectDate, 'd MMMM yyyy');
  return (
    <WrapperPagination>
      <ButtonForOpenCalendar
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {(locationDay === 'day' || location.pathname === '/statistics')
          ? formattedDay
          : dateToday}
        {open && (
        <CalendarModal
          onNext={onNext}
          onPrev={onPrev}
          dateToday={dateToday}
          dayInterval={dayInterval}
          onClickDate={onClickDate}
        />
      )}
      </ButtonForOpenCalendar>
      
      <PeriodPaginator>
        <BtnPaginatorLeft onClick={onPrev}>
          <ImgPaginatorPrev src={Prev} alt="prev" width={16} height={16} />
        </BtnPaginatorLeft>
        <BtnPaginatorRight onClick={onNext}>
          <ImgPaginatorNext src={Next} alt="next" width={16} height={16} />
        </BtnPaginatorRight>
      </PeriodPaginator>
    </WrapperPagination>
  );
};
