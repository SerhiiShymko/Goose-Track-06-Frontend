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
import Notiflix from 'notiflix';

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
  const currentCategory = task ? task[0].category : '';

  const [radio, setRadio] = useState(currentRadio);
  const [title, setTitle] = useState(currentTitle);
  const [timeStart, setTimeStart] = useState(currentTimeStart);
  const [timeEnd, setTimeEnd] = useState(currentTimeEnd);
  const [error, setError] = useState('');

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
        _id: currentId,
        title: title,
        date: task[0].date,
        start: timeStart,
        end: timeEnd,
        priority: radio,
        category: currentCategory,
      };
     
      dispatch(updateTask(newTask));
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
    const startHour = Number(newTask.start.split(':')[0]);
    const startMinute = Number(newTask.start.split(':')[1]);
    const endHour = Number(newTask.end.split(':')[0]);
    const endMinute = Number(newTask.end.split(':')[1]);

    if (startHour >= endHour) {
      if (startHour > endHour) {
        Notiflix.Notify.warning(
          'Cannot have a start time greater then the end time'
        );       
        setError("error")
        return ;
      }
      if (startMinute >= endMinute) {
        Notiflix.Notify.warning(
          'Cannot have a start time greater then the end time'
        );
         setError('error');
        return ;
      }
      dispatch(addTask(newTask));
      setRadio('');
      setTimeEnd('');
      setTimeStart('');
      setTitle('');
      setError("");
      closeModal();
      return;
    }
  };
  
  const handleColorBorder = () => {
    if (error === 'error') {
      return 'rgba(234, 61, 101, 1)';
    }
    return 'rgba(220, 227,229, 0.8)';    
  }

  const onValueChange = event => {
    setRadio(event.target.id);
  };

  return (
    <Modal closeModal={closeModal}>
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
              required
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
                $border={handleColorBorder}
                required
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
                $border={handleColorBorder}
                required
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
