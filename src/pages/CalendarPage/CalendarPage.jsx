import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay';

// import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfWeek,
} from 'date-fns';
import { useState } from 'react';

// import Spinner from 'components/Spinner/Spinner';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

const CalendarPage = () => {
  const date = format(new Date(), 'MMMM yyyy');
  const [activeDate, setActiveDate] = useState(date);

  let firstDayCurrentMonth = parse(activeDate, 'MMMM yyyy', new Date());
  
  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setActiveDate(format(firstDayNextMonth, 'MMMM yyyy'));
  };

  const prevMonth = () => {
    let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setActiveDate(format(firstDayPrevMonth, 'MMMM yyyy'));
  };

  const result = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });

  return (
    <>

      <CalendarToolBar
        dayInterval={result}
        onNext={nextMonth}
        onPrev={prevMonth}
        dateToday={activeDate}
      />
      {/* <ChoosedMonth
        dayInterval={result}
        onNext={nextMonth}
        onPrev={prevMonth}
        dateToday={activeDate}
      /> */}
<ChoosedDay/>
      {/* <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default CalendarPage;
