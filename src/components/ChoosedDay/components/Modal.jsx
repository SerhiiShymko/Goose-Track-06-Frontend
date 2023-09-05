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

export const ModalAddAndChange = ({ closeModal }) => {
  return (
    <Modal>
      <ContainerForm>
        <form>
          <SvgClose onClick={closeModal}></SvgClose>
          <TextLabel>
            Title
            <TextInput placeholder="Enter text"></TextInput>
          </TextLabel>
          <ContainerTime>
            <Timelabel>
              Start
              <TimeInput placeholder="09:00"></TimeInput>
            </Timelabel>
            <Timelabel>
              End
              <TimeInput placeholder="14:00"></TimeInput>
            </Timelabel>
          </ContainerTime>
          <ContainerRadio>
            <div>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id="louie"
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
                  id="louie"
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
                  id="louie"
                  name="drone"
                  $border={'rgba(234, 61, 101, 0.5)'}
                  $background={'rgba(234, 61, 101, 1)'}
                />
                High
              </RadioLabel>
            </div>
          </ContainerRadio>
          <ContainerButton>
            <ButtonAdd>
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
