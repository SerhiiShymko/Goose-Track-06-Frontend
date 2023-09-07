// import { useState } from 'react';
import { Wrapper } from './CalendarToolBar.styled';
import { PeriodSelect } from './PeriodSelect/PeriodSelect';

import { WrapperPaginator } from './WrapperPaginator/WrapperPaginator';

export const CalendarToolBar = ({
  dayInterval,
  onNext,
  onPrev,
  dateToday,
  onClickDate,
  activePeriod,
  setPeriodType,
}) => {
  // const [activePeriod, setActivePeriod] = useState('month');

  // const selectPeriod = value => {
  //   setActivePeriod(value)
  // }

  return (
    <Wrapper>
      <WrapperPaginator
        dayInterval={dayInterval}
        onNext={onNext}
        onPrev={onPrev}
        dateToday={dateToday}
        onClickDate={onClickDate}
        activePeriod={activePeriod}
      />
      <PeriodSelect setPeriodType={setPeriodType} activePeriod={activePeriod} />
    </Wrapper>
  );
};
