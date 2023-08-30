// import Statistics from "components/Statistics/statistics";

import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
// import ChoosedDay from 'components/ChoosedDay/ChoosedDay';
import Spinner from 'components/Spinner/Spinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const CalendarPage = () => {
  return (
    <>
      <CalendarToolBar />
      <ChoosedMonth />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
