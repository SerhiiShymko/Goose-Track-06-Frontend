import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
import {
  ButtonAdd,
  ButtonCancel,
  ContainerButton,
  ContainerForm,
  ContainerRadio,
  ContainerTime,
  RadioInput,
  RadioLabel,
  SvgClose,
  SvgPencil,
  SvgPlus,
  TextInput,
  TextLabel,
  TimeInput,
  Timelabel,
} from './Modal.styled';

import { PRIORITY } from 'data/constants';
import { addTask, updateTask } from '../../../redux/tasks/operations';

export const ModalAddAndChange = ({
  closeModal,
  currentDay,
  category,
  todo,
  task,
}) => {
  const currentTitle = task ? task[0].title : '';
  const currentTimeStart = task ? task[0].start : '';
  const currentTimeEnd = task ? task[0].end : '';
  const currentRadio = task ? task[0].priority : '';
  const currentId = task ? task[0]._id : '';

  const [radio, setRadio] = useState(currentRadio);
  const [title, setTitle] = useState(currentTitle);
  const [timeStart, setTimeStart] = useState(currentTimeStart);
  const [timeEnd, setTimeEnd] = useState(currentTimeEnd);

  const dispatch = useDispatch();
  const hendleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'title':
        if (value === '') {
          setTitle(value);
        }
        setTitle(value);
        break;
      case 'timeStart':
        if (value === '') {
          setTimeStart(value);
        }
        // if (!isValidNumber(value)) {
        //   setStart(value);
        //   return;
        // }
        setTimeStart(value);
        break;
      case 'timeEnd':
        if (value === '') {
          setTimeEnd(value);
        }
        setTimeEnd(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const todo = event.target[6].name;

    if (todo === 'change') {
      const newTask = {
        title: title,
        date: task[0].date,
        start: timeStart,
        end: timeEnd,
        priority: radio,
        category: category,
      };
      const changeTask = {
        _id: currentId,
        category: newTask,
      };
      dispatch(updateTask(changeTask));
      setRadio('');
      setTimeEnd('');
      setTimeStart('');
      setTitle('');
      closeModal();
      return;
    }
    const newTask = {
      title: title,
      date: currentDay,
      start: timeStart,
      end: timeEnd,
      priority: radio,
      category: category,
    };
    dispatch(addTask(newTask));
    setRadio('');
    setTimeEnd('');
    setTimeStart('');
    setTitle('');
    closeModal();
    return;
  };

  const onValueChange = event => {
    setRadio(event.target.id);
  };

  return (
    <Modal>
      <ContainerForm>
        <form onSubmit={handleSubmit}>
          <SvgClose onClick={closeModal}></SvgClose>
          <TextLabel>
            Title
            <TextInput
              placeholder="Enter text"
              name="title"
              value={title}
              onChange={hendleChange}
            ></TextInput>
          </TextLabel>
          <ContainerTime>
            <Timelabel>
              Start
              <TimeInput
                name="timeStart"
                placeholder="09:00"
                onChange={hendleChange}
                value={timeStart}
                type="time"
              ></TimeInput>
            </Timelabel>
            <Timelabel>
              End
              <TimeInput
                name="timeEnd"
                placeholder="18:00"
                value={timeEnd}
                onChange={hendleChange}
                type="time"
              ></TimeInput>
            </Timelabel>
          </ContainerTime>
          <ContainerRadio>
            <div>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id={PRIORITY.LOW}
                  $border={'rgba(114, 194, 248, 0.5)'}
                  $background={'rgba(114, 194, 248, 1)'}
                  onChange={onValueChange}
                  checked={radio === PRIORITY.LOW}
                />
                Low
              </RadioLabel>
            </div>
            <div>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id={PRIORITY.MEDIUM}
                  $border={'rgba(243, 178, 73, 0.5)'}
                  $background={'rgba(243, 178, 73, 1)'}
                  onChange={onValueChange}
                  checked={radio === PRIORITY.MEDIUM}
                />
                Medium
              </RadioLabel>
            </div>
            <div>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id={PRIORITY.HIGH}
                  $border={'rgba(234, 61, 101, 0.5)'}
                  $background={'rgba(234, 61, 101, 1)'}
                  onChange={onValueChange}
                  checked={radio === PRIORITY.HIGH}
                />
                High
              </RadioLabel>
            </div>
          </ContainerRadio>
          <ContainerButton>
            <ButtonAdd type="submit" name={todo === 'add' ? 'add' : 'change'}>
              {todo === 'add' ? <SvgPlus /> : <SvgPencil />}
              {todo === 'add' ? 'Add' : 'Edit'}
            </ButtonAdd>
            <ButtonCancel onClick={closeModal}>Cancel</ButtonCancel>
          </ContainerButton>
        </form>
      </ContainerForm>
    </Modal>
  );
};
