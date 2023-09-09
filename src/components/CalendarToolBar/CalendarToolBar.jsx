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
  setOpen,
  open,
}) => {
  return (
    <Wrapper>
      <WrapperPaginator
        dayInterval={dayInterval}
        onNext={onNext}
        onPrev={onPrev}
        dateToday={dateToday}
        onClickDate={onClickDate}
        activePeriod={activePeriod}
        setOpen={setOpen}
        open={open}
      />
      <PeriodSelect setPeriodType={setPeriodType} activePeriod={activePeriod} />
    </Wrapper>
  );
};
