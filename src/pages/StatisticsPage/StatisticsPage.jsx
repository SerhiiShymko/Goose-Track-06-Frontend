import { WrapperPaginator } from 'components/CalendarToolBar/WrapperPaginator/WrapperPaginator';
import Statistics from 'components/Statistics/statistics';
import { StatisticWrapper } from 'components/Statistics/statistics.styled';
import { add, eachDayOfInterval, endOfMonth, endOfWeek, format, parse, startOfWeek } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { fetchTasks } from 'redux/tasks/operations';
import Calendare from 'components/Statistics/Calendare/calendare';
import { Wrapper } from 'components/Statistics/statistics.styled';



const StatisticsPage = () => {
  const date = format(new Date(), 'MMMM yyyy');
  const [activeDate, setActiveDate] = useState(date);
  const dispatch = useDispatch(selectTasks);

  let firstDayCurrentMonth = parse(activeDate, 'MMMM yyyy', new Date());

  const currentDate = format(new Date(activeDate), `yyyy-MM-dd`);

    useEffect(() => {
      dispatch(fetchTasks(currentDate));
    }, [dispatch, currentDate]);

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
    <StatisticWrapper>
      <Wrapper>
        <WrapperPaginator
          dayInterval={result}
          onNext={nextMonth}
          onPrev={prevMonth}
          dateToday={activeDate}
        />
      </Wrapper>
      <Statistics currentDay={'2023-08-25'} />
    </StatisticWrapper>
  );
};

export default StatisticsPage;
