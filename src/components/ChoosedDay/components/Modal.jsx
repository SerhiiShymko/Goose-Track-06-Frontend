import { Modal } from 'components/Modal/Modal';
import { ButtonAdd, ButtonCancel, ContainerForm, ContainerTime, SvgClose, TextInput, TextLabel } from './Modal.styled';

export const ModalAddAndChange = ({ closeModal }) => {
  return (
    <Modal>
      <ContainerForm>
        <form>
          <SvgClose></SvgClose>
          <TextLabel>
            Title
            <TextInput placeholder="Enter text"></TextInput>
          </TextLabel>
          <ContainerTime>
            <label>
              Start
              <input></input>
            </label>
            <label>
              End
              <input></input>
            </label>
          </ContainerTime>
          <div>
            <label>
              Louie
              <input type="radio" id="louie" name="drone" />
            </label>
          </div>
          <div>
            <label>
              Louie
              <input type="radio" id="louie" name="drone" />
            </label>
          </div>
          <div>
            <label>
              Louie
              <input type="radio" id="louie" name="drone" />
            </label>
          </div>
          <ButtonAdd>Edit</ButtonAdd>
          <ButtonCancel onClick={closeModal}>Cancel</ButtonCancel>
        </form>
      </ContainerForm>
    </Modal>
  );
};
