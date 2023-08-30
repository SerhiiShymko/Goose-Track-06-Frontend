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
} from './CalendarToolBar.styled';
import { Container } from 'styles/Container';
import Prev from '../../images/calendar/chevron-left.svg';
import Next from '../../images/calendar/chevron-right.svg';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const CalendarToolBar = () => {
  const date = format(new Date(), 'MMMM yyyy');
  const [selectedDate, setSelectedDate] = useState(date);
  const [activeDate, setActiveDate] = useState(date);
  const [open, setOpen] = useState(false);
  let firstDayCurrentMonth = parse(activeDate, 'MMMM yyyy', new Date());

  const startDayOfMonth = startOfMonth(new Date());
  const startDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const endDayOfMonth = endOfMonth(new Date());
  const endDayOfWeek = () => endOfWeek(new Date(), { weekStartsOn: 1 });

  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(format(addDays(startDayOfWeek, day), 'EEEEE'));
  }

  const result = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setActiveDate(format(firstDayNextMonth, 'MMMM yyyy'));
  };

  const prevMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setActiveDate(format(firstDayNextMonth, 'MMMM yyyy'));
  };

  console.log(format(firstDayCurrentMonth, 'EEEEE'));

  const resultDate = result.map(day =>
    format(day, 'd MMMM') === format(new Date(), 'd MMMM') ? (
      <ActiveCalendarDate key={day.toString()}>
        {format(day, 'd')}
      </ActiveCalendarDate>
    ) : (
      <CalendarDate key={day.toString()}>{format(day, 'd')}</CalendarDate>
    )
  );

  return (
    <Wrapper>
      <ButtonForOpenCalendar
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {activeDate}
      </ButtonForOpenCalendar>
      {open && (
        <ModalCalendar>
          <Caption>
            <Button onClick={prevMonth}>
              <ImgPaginatorPrev src={Prev} alt="prev" width={18} height={18} />
            </Button>
            <DataText>{activeDate}</DataText>
            <Button onClick={nextMonth}>
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
        <BtnPaginatorLeft onClick={prevMonth}>
          <ImgPaginatorPrev src={Prev} alt="prev" width={16} height={16} />
        </BtnPaginatorLeft>
        <BtnPaginatorRight onClick={nextMonth}>
          <ImgPaginatorNext src={Next} alt="next" width={16} height={16} />
        </BtnPaginatorRight>
      </PeriodPaginator>
      <PeriodTypeSelect>
        <BtnTypeSelectMonth type="button">Month</BtnTypeSelectMonth>
        <BtnTypeSelectDay type="button">Day</BtnTypeSelectDay>
      </PeriodTypeSelect>
    </Wrapper>
  );
};
