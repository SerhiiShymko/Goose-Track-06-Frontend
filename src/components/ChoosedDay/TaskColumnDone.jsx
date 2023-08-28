import {
  ButtonAddTask,
  TaskName,
  TextInButton,
  TaskBorder,
  TextInTitle,
  TaskListContainer,
  TaskItemContainer,
  TaskText,
  TaskPriority,
  TaskLogoList,
  TaskImageUser,
  KontrolWrapper,
  WrapperUser,
  SvgAddTask,  
  SvgPlusCircle,
  SvgPencil,
  SvgTrash,
} from './ChoosedDay.styled';

import { PRIORITY } from '../../data/constants';
import SimplePopper from './Popup';

const uuid = require('uuid').v4;

const TaskColumnDone = ({ data }) => {
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
        <TextInTitle>Done</TextInTitle>
        <SvgPlusCircle />
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
                <SimplePopper category={'done'} />
                <SvgPencil />
                <SvgTrash />
              </TaskLogoList>
            </KontrolWrapper>
          </TaskItemContainer>
        ))}
      </TaskListContainer>
      <ButtonAddTask>
        <SvgAddTask />
        <TextInButton>Add task</TextInButton>
      </ButtonAddTask>
    </TaskBorder>
  );
};

export default TaskColumnDone;
