import { useDispatch } from 'react-redux';
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
  TrashButton,
} from '../ChoosedDay.styled';

import { deleteTask } from '../../../redux/tasks/operations';
import { PRIORITY } from '../../../data/constants';
import SimplePopper from '../Popup';

const TaskColumnDone = ({ data }) => {
  const dispatch = useDispatch();

  const priorityColor = priority => {
    if (priority === PRIORITY.LOW) {
      return '#72C2F8';
    } else if (priority === PRIORITY.MEDIUM) {
      return '#F3B249';
    }
    return '#EA3D65';
  };

  const letterUp = name => {
    const altName = name;
    const splitted = altName.split('');
    const first = splitted[0].toUpperCase();
    const rest = [...splitted];
    rest.splice(0, 1);
    const result = [first, ...rest].join('');
    return result;
  };

  const textSlice = text => {
    const altText = text;
    const textLength = altText.length;
    if (textLength > 20) {
      const newText = altText.slice(0, 19) + '...';
      return newText;
    }
    return altText;
  };

  const hendlerDelete = event => {
    const id = event.currentTarget.dataset.number;
    dispatch(deleteTask(id));
  };

  return (
    <TaskBorder>
      <TaskName>
        <TextInTitle>Done</TextInTitle>
        <SvgPlusCircle />
      </TaskName>
      <TaskListContainer>
        {data?.map(item => (
          <TaskItemContainer key={item._id}>
            <TaskText>{textSlice(item.title)}</TaskText>
            <KontrolWrapper>
              <WrapperUser>
                <TaskImageUser></TaskImageUser>
                <TaskPriority $background={priorityColor(item.priority)}>
                  {letterUp(item.priority)}
                </TaskPriority>
              </WrapperUser>
              <TaskLogoList>
                <SimplePopper category={'done'} number={item._id} />
                <SvgPencil />
                <TrashButton
                  data-number={item._id}
                  onClick={hendlerDelete}
                  type="button"
                >
                  <SvgTrash />
                </TrashButton>
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
