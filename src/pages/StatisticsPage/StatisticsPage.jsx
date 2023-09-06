import { WrapperPaginator } from 'components/CalendarToolBar/WrapperPaginator/WrapperPaginator';
import Statistics from 'components/Statistics/statistics';
import { StatisticWrapper } from 'components/Statistics/statistics.styled';
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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { Wrapper } from 'components/Statistics/statistics.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setCurrentDate } from 'redux/auth/authSlice';

const StatisticsPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  
  const date = format(new Date(), 'yyyy-MM-dd');
  const [dataDate, setDataDate] = useState(date);
  const dataMonth = dataDate.slice(0, 7)
   
  useEffect(() => {
    dispatch(fetchTasks(dataMonth));
  }, [dispatch, dataMonth]);

  const onClickDate = ({currentTarget}) => {
    setDataDate(currentTarget.dataset.day);
  };

 const selectDate = useSelector(state => state.auth.currentDate);
 const formattedDate = format(selectDate, 'MMMM yyyy');
 const formattedOneDay = format(selectDate, 'yyyy-MM-dd');

 let firstDayCurrentMonth = parse(formattedDate, 'MMMM yyyy', new Date());
 let currentDay = parse(formattedOneDay, 'yyyy-MM-dd', new Date());

 
 const nextMonth = () => {
   const locationDay = location.pathname.slice(10, 13);
   if (locationDay === 'day' || location.pathname === '/statistics') {
     const nextDay = add(currentDay, { days: 1 });
     const dayTimeStamp = nextDay.getTime();
     dispatch(setCurrentDate(dayTimeStamp));
    
   } else {
     let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
     const dateTimeStamp = firstDayNextMonth.getTime();
     dispatch(setCurrentDate(dateTimeStamp));
   }
 };

 const prevMonth = () => {
   const locationDay = location.pathname.slice(10, 13);
   if (locationDay === 'day' || location.pathname === '/statistics') {
     const prevDay = add(currentDay, { days: -1 });
     const dayTimeStamp = prevDay.getTime();
     dispatch(setCurrentDate(dayTimeStamp));
    
   } else {
     let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
     const dateTimeStamp = firstDayPrevMonth.getTime();
     dispatch(setCurrentDate(dateTimeStamp));
   }
 };

 const result = eachDayOfInterval({
   start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
   end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
 });

  return (
    <StatisticWrapper>
      <Wrapper>
        <WrapperPaginator
          onClickDate={onClickDate}
          dayInterval={result}
          onNext={nextMonth}
          onPrev={prevMonth}
          dateToday={formattedDate}
        />
      </Wrapper>
      <Statistics currentDate={dataDate}/>
    </StatisticWrapper>
  );
};

export default StatisticsPage;
