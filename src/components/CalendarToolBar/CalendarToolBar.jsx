import {
  Wrapper,
  PeriodTypeSelect,
  BtnTypeSelectMonth,
  BtnTypeSelectDay,
} from './CalendarToolBar.styled';

import { WrapperPaginator } from './WrapperPaginator/WrapperPaginator';

export const CalendarToolBar = ({ dayInterval, onNext, onPrev, dateToday }) => {
  return (
    <Wrapper>
      <WrapperPaginator dayInterval={dayInterval} onNext={onNext} onPrev={onPrev} dateToday={dateToday}/>
      <PeriodTypeSelect>
        <BtnTypeSelectMonth to="calendar/month/:currentDate">
          Month
        </BtnTypeSelectMonth>
        <BtnTypeSelectDay to="calendar/day/:currentDay">Day</BtnTypeSelectDay>
      </PeriodTypeSelect>
    </Wrapper>
  );
};
