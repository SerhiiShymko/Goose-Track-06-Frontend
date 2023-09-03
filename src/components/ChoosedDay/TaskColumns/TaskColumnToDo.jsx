import * as React from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
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
} from '../ChoosedDay.styled';

import { CATEGORY, PRIORITY } from '../../../data/constants';
import { addTask, deleteTask } from '../../../redux/tasks/operations';
import SimplePopper from '../components/Popup';
import BasicPopover from '../components/Popover';

const TaskColumnToDo = ({ data, currentDay }) => {
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

  const hendlerDelete = id => {
    dispatch(deleteTask(id));
  };

  const hendlerAdd = () => {
    const newTask = {
      title: 'Додати завдання',
      date: currentDay,
      start: '09:00',
      end: '15:00',
      priority: 'high',
      category: CATEGORY.TODO,
    };
    dispatch(addTask(newTask));
  };
  const onDragEnd = result => {
  // TODO
}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TaskBorder>
        <TaskName>
          <TextInTitle>To do</TextInTitle>
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
                  <SimplePopper category={'to-do'} number={item._id} />
                  <SvgPencil number={item._id} />
                  <BasicPopover
                    number={item._id}
                    hendlerDelete={hendlerDelete}
                  />
                </TaskLogoList>
              </KontrolWrapper>
            </TaskItemContainer>
          ))}
        </TaskListContainer>
        <ButtonAddTask type="button" onClick={hendlerAdd}>
          <SvgAddTask />
          <TextInButton>Add task</TextInButton>
        </ButtonAddTask>
      </TaskBorder>
    </DragDropContext>
  );
};

export default TaskColumnToDo;
