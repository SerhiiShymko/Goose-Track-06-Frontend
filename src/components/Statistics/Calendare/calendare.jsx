import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { forwardRef, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';

const Calendare = () => {
  const [startDate, setStartDate] = useState(format(new Date(), `yyyy-MM-dd`));
//   console.log(startDate);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const handleCalendarClose = () => console.log('Calendar closed');
  const handleCalendarOpen = () => console.log('Calendar opened');

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        name="startDate"
        onChange={date => setStartDate(date)}
        customInput={<ExampleCustomInput />}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
      />
    </LocalizationProvider>
  );
};

export default Calendare;
