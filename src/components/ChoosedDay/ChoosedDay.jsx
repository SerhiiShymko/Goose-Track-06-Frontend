import dayjs from "dayjs";
import { MainContainer } from "./ChoosedDay.styled";
import DayCalendarHead from "./DayCalendarHead";
import TaskColumnsList from "./TaskColumnsList";

const ChoosedDay = ({date}) => { 
  
  // if (date) {
  //   const currentDate = date;
  //   return currentDate;
  // }
  // const currentDate = dayjs().format("YYYY-MM-DD");
  let currentDate = '';
  date ? (currentDate = date) : (currentDate = dayjs().format('YYYY-MM-DD'));
  
    return (
      <MainContainer>
        <DayCalendarHead currentDate={currentDate} />
        <TaskColumnsList currentDate={currentDate} />
      </MainContainer>
    );
}

export default ChoosedDay;