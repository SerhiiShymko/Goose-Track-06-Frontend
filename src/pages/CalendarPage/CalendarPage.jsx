import { CalendarToolbar } from "components/CalendarToolBar/CalendarToolBar";

const CalendarPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <CalendarToolbar/>
    </div>
  );
};

export default CalendarPage;
