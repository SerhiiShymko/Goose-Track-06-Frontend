// import dayjs from "dayjs";
import { MainContainer } from "./ChoosedDay.styled";
import DayCalendarHead from "./DayCalendarHead";
import TaskColumnsList from "./TaskColumnsList";

const ChoosedDay = ({date}) => {
  // const currentDate = '2023-08-30';
  
  if (date) {
    const currentDate = date;
    return currentDate;
  }
  // const currentDate = dayjs();
  const currentDate = "2023-08-30";
    return (
      <MainContainer>
        <DayCalendarHead currentDate={currentDate} />
        <TaskColumnsList currentDate={currentDate} />
      </MainContainer>
    );
}

export default ChoosedDay;