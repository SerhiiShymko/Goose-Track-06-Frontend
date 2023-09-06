import dayjs from "dayjs";
import { MainContainer } from "./ChoosedDay.styled";
import DayCalendarHead from "./DayCalendarHead";
import TaskColumnsList from "./TaskColumnsList";
import { useSelector } from "react-redux";
import { selectCurrentDate } from "redux/auth/selectors";

const ChoosedDay = () => { 
  const selectDate = useSelector(selectCurrentDate);
 
  let currentDate = '';
  
  selectDate
    ? (currentDate = dayjs(selectDate).format('YYYY-MM-DD'))
    : (currentDate = dayjs().format('YYYY-MM-DD'));
  
    return (
      <MainContainer>
        <DayCalendarHead currentDate={currentDate} />
        <TaskColumnsList currentDate={currentDate} />
      </MainContainer>
    );
}

export default ChoosedDay;