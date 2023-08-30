import { MainContainer } from "./ChoosedDay.styled";
import DayCalendarHead from "./DayCalendarHead";
import TaskColumnsList from "./TaskColumnsList";

const ChoosedDay = () => {
    
    return (
      <MainContainer>
        <DayCalendarHead />
        <TaskColumnsList />
      </MainContainer>
    );
}

export default ChoosedDay;