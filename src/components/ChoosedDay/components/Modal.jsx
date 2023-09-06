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
  SvgPlus,
  TextInput,
  TextLabel,
  TimeInput,
  Timelabel,
} from './Modal.styled';
import { PRIORITY } from 'data/constants';
import { addTask } from '../../../redux/tasks/operations';

export const ModalAddAndChange = ({ closeModal, currentDay, category }) => {
  const [radio, setRadio] = useState();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const newTask = {
      title: form.elements.text.value,
      date: currentDay,
      start: event.target[1].value,
      end: event.target[2].value,
      priority: radio,
      category: category,
    };
    dispatch(addTask(newTask));
    closeModal();
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
            <TextInput placeholder="Enter text" name="text"></TextInput>
          </TextLabel>
          <ContainerTime>
            <Timelabel>
              Start
              <TimeInput name="timeStart" placeholder="09:00"></TimeInput>
            </Timelabel>
            <Timelabel>
              End
              <TimeInput name="timeEnd" placeholder="18:00"></TimeInput>
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
            <ButtonAdd type="submit">
              <SvgPlus />
              Add
            </ButtonAdd>
            <ButtonCancel onClick={closeModal}>Cancel</ButtonCancel>
          </ContainerButton>
        </form>
      </ContainerForm>
    </Modal>
  );
};
