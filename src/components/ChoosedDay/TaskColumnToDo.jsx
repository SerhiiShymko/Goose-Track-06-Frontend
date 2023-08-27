import {
  ButtonAddTask,
  TaskName,
  LogoPlus,
  TextInButton,
  TaskBorder,
  TextInTitle,
  TaskListContainer,
  TaskItemContainer,
  TaskText,
  TaskPriority,
  TaskLogo,
  TaskLogoList,
  TaskImageUser,
  KontrolWrapper,
  WrapperUser,
} from './ChoosedDay.styled';

import addTask from '../../images/tascs/addTask.svg';
import plusCircle from '../../images/tascs/plus.svg';
import arrowCircle from '../../images/tascs/arrow-circle-right.svg';
import pencil from '../../images/tascs/pencil-2.svg';
import trash from '../../images/tascs/trash-2.svg';
import { PRIORITY } from '../../data/constants';

const uuid = require('uuid').v4;

const TaskColumnToDo = ({ data }) => {
  
  const priorityColor = priority => {
    if (priority === PRIORITY.LOW) {
      return '#72C2F8';
    } else if (priority === PRIORITY.MEDIUM) {
      return '#F3B249';
    }
    return '#EA3D65';
  };
  return (
    <TaskBorder>
      <TaskName>
        <TextInTitle>To do</TextInTitle>
        <LogoPlus src={plusCircle} alt="Add task" />
      </TaskName>
      <TaskListContainer>
        {data?.map(item => (
          <TaskItemContainer key={uuid()}>
            <TaskText>{item.text}</TaskText>
            <KontrolWrapper>
              <WrapperUser>
                <TaskImageUser></TaskImageUser>
                <TaskPriority $background={priorityColor(item.priority)}>
                  {item.priority}
                </TaskPriority>
              </WrapperUser>
              <TaskLogoList>
                <TaskLogo src={arrowCircle} alt="Transferred"></TaskLogo>
                <TaskLogo src={pencil} alt="Change"></TaskLogo>
                <TaskLogo src={trash} alt="Delete"></TaskLogo>
              </TaskLogoList>
            </KontrolWrapper>
          </TaskItemContainer>
        ))}
      </TaskListContainer>
      <ButtonAddTask>
        <LogoPlus src={addTask} alt="Add task" />
        <TextInButton>Add task</TextInButton>
      </ButtonAddTask>
    </TaskBorder>
  );
};

export default TaskColumnToDo;
