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
} from '../ChoosedDay.styled';
import { deleteTask } from '../../../redux/tasks/operations';
import { CATEGORY, PRIORITY } from '../../../data/constants';
import SimplePopper from '../components/Popup';
import BasicPopover from '../components/Popover';
import { useState } from 'react';
import { ModalAddAndChange } from '../components/Modal';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const TaskColumnInProg = ({ data, currentDay }) => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalChange, setShowModalChange] = useState(false);
  const [task, setTask] = useState([]);

  const dispatch = useDispatch();

  const openModalChange = event => {
    const id = event.currentTarget.dataset.number;
    const currentTask = data.filter(task => task._id === id);
    setTask(currentTask);

    setShowModalChange(true);
    return;
  };
  const openModalAdd = () => {
    setShowModalAdd(true);
  };

  const closeModalAdd = () => {
    setShowModalAdd(false);
  };
  const closeModalChange = () => {
    setShowModalChange(false);
  };

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

  const handleDelete = id => {
    dispatch(deleteTask(id));
  };

  const user = useSelector(selectUser);
    const avatarURL = user.avatarURL;
  return (
    <TaskBorder>
      <TaskName>
        <TextInTitle>In progress</TextInTitle>
        <SvgPlusCircle type="button" onClick={openModalAdd} />
      </TaskName>
      <TaskListContainer>
        {data?.map(item => (
          <TaskItemContainer key={item._id}>
            <TaskText>{textSlice(item.title)}</TaskText>
            <KontrolWrapper>
              <WrapperUser>
                <TaskImageUser src={avatarURL} alt="avatar"></TaskImageUser>
                <TaskPriority $background={priorityColor(item.priority)}>
                  {letterUp(item.priority)}
                </TaskPriority>
              </WrapperUser>
              <TaskLogoList>
                <SimplePopper category={'in-progress'} number={item._id} />
                <SvgPencil
                  type="button"
                  onClick={openModalChange}
                  data-number={item._id}
                />
                <BasicPopover number={item._id} handleDelete={handleDelete} />
              </TaskLogoList>
            </KontrolWrapper>
          </TaskItemContainer>
        ))}
      </TaskListContainer>
      <ButtonAddTask type="button" onClick={openModalAdd}>
        <SvgAddTask />
        <TextInButton>Add task</TextInButton>
      </ButtonAddTask>
      {showModalAdd && (
        <ModalAddAndChange
          closeModal={closeModalAdd}
          todo={'add'}
          category={CATEGORY.INPROGRESS}
          currentDay={currentDay}
        />
      )}
      {showModalChange && (
        <ModalAddAndChange
          closeModal={closeModalChange}
          todo={'change'}
          category={CATEGORY.INPROGRESS}
          currentDay={currentDay}
          task={task}
        />
      )}
    </TaskBorder>
  );
};

export default TaskColumnInProg;