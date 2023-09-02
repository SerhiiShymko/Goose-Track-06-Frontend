import {
  format,
  startOfWeek,
  addDays,
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
  ActiveCalendarDate,
  ButtonForOpenCalendar,
  Wrapper,
  PeriodPaginator,
  ImgPaginatorNext,
  ImgPaginatorNextModal,
  ImgPaginatorPrev,
  BtnPaginatorLeft,
  BtnPaginatorRight,
  PeriodTypeSelect,
  BtnTypeSelectMonth,
  BtnTypeSelectDay,
  WrapperPaginator,
} from './CalendarToolBar.styled';

import Prev from '../../images/calendar/chevron-left.svg';
import Next from '../../images/calendar/chevron-right.svg';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const CalendarToolBar = ({dayInterval, onNext, onPrev, dateToday}) => {
  const [open, setOpen] = useState(false);
  const startDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });

  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(format(addDays(startDayOfWeek, day), 'EEEEE'));
  }

  const resultDate = dayInterval.map(day => {
    if (format(day, 'MMMM yyyy') !== dateToday) {
      return <div key={day.toString()}></div>;
    } else {
      return format(day, 'd MMMM') === format(new Date(), 'd MMMM') ? (
        <ActiveCalendarDate key={day.toString()}>
          {format(day, 'd')}
        </ActiveCalendarDate>
      ) : (
        <CalendarDate key={day.toString()}>{format(day, 'd')}</CalendarDate>
      );
    }
  });

  return (
    <Wrapper>
      <WrapperPaginator>
        <ButtonForOpenCalendar
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {dateToday}
        </ButtonForOpenCalendar>
        {open && (
          <ModalCalendar>
            <Caption>
              <Button onClick={onPrev}>
                <ImgPaginatorPrev
                  src={Prev}
                  alt="prev"
                  width={18}
                  height={18}
                />
              </Button>
              <DataText>{dateToday}</DataText>
              <Button onClick={onNext}>
                <ImgPaginatorNextModal
                  src={Next}
                  alt="next"
                  width={18}
                  height={18}
                />
              </Button>
            </Caption>
            <WeekDays>
              {weekDays.map(day => (
                <Day key={nanoid()}>{day}</Day>
              ))}
            </WeekDays>
            <CalendarTable>{resultDate}</CalendarTable>
          </ModalCalendar>
        )}
        <PeriodPaginator>
          <BtnPaginatorLeft onClick={onPrev}>
            <ImgPaginatorPrev src={Prev} alt="prev" width={16} height={16} />
          </BtnPaginatorLeft>
          <BtnPaginatorRight onClick={onNext}>
            <ImgPaginatorNext src={Next} alt="next" width={16} height={16} />
          </BtnPaginatorRight>
        </PeriodPaginator>
      </WrapperPaginator>
      <PeriodTypeSelect>
        <BtnTypeSelectMonth to="calendar/month/:currentDate">
          Month
        </BtnTypeSelectMonth>
        <BtnTypeSelectDay to="calendar/day/:currentDay">Day</BtnTypeSelectDay>
      </PeriodTypeSelect>
    </Wrapper>
  );
};
