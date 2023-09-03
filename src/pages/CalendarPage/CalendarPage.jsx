import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay';
// import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
// import Spinner from 'components/Spinner/Spinner';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

const CalendarPage = () => {
  return (
    <>
      <CalendarToolBar />
      {/* <ChoosedMonth /> */}
      <ChoosedDay/>
      {/* <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default CalendarPage;
