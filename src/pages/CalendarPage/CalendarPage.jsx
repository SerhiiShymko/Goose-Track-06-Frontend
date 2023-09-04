// import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';

// import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
// import {
//   add,
//   eachDayOfInterval,
//   endOfMonth,
//   endOfWeek,
//   format,
//   parse,
//   startOfWeek,
// } from 'date-fns';
// import { useEffect } from 'react';
// import { useState } from 'react';

import Spinner from 'components/Spinner/Spinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { WrapperCalendar } from 'components/WrapperCalendar/WrapperCalendar';

const CalendarPage = () => {
  

  return (
    <>
      <WrapperCalendar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
