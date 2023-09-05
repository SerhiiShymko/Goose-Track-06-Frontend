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
import { CATEGORY, PRIORITY } from 'data/constants';

export const ModalAddAndChange = ({ closeModal, currentDay, category }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const newTask = {
      title: event.target[0].value,
      date: currentDay,
      start: event.target[1].value,
      end: event.target[2].value,
      //     "priority": "low",
      category,
    };
    console.log(event)
  };
  return (
    <Modal>
      <ContainerForm>
        <form onSubmit={handleSubmit}>
          <SvgClose onClick={closeModal}></SvgClose>
          <TextLabel>
            Title
            <TextInput placeholder="Enter text"></TextInput>
          </TextLabel>
          <ContainerTime>
            <Timelabel>
              Start
              <TimeInput></TimeInput>
            </Timelabel>
            <Timelabel>
              End
              <TimeInput></TimeInput>
            </Timelabel>
          </ContainerTime>
          <ContainerRadio>
            <div>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id={PRIORITY.LOW}
                  name="drone"
                  $border={'rgba(114, 194, 248, 0.5)'}
                  $background={'rgba(114, 194, 248, 1)'}
                />
                Low
              </RadioLabel>
            </div>
            <div>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id={PRIORITY.MEDIUM}
                  name="drone"
                  $border={'rgba(243, 178, 73, 0.5)'}
                  $background={'rgba(243, 178, 73, 1)'}
                />
                Medium
              </RadioLabel>
            </div>
            <div>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id={PRIORITY.HIGH}
                  name="drone"
                  $border={'rgba(234, 61, 101, 0.5)'}
                  $background={'rgba(234, 61, 101, 1)'}
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
