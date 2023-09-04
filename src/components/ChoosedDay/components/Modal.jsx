import { Modal } from 'components/Modal/Modal';
import { ButtonAdd, ButtonCancel, ContainerForm } from './Modal.styled';

export const ModalAddAndChange = ({ closeModal }) => {
  return (
    <Modal>
      <ContainerForm>
        <form>
          <svg></svg>
          <label>
            Title
            <input></input>
          </label>
          <label>
            Start
            <input></input>
          </label>
          <label>
            End
            <input></input>
          </label>
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
          <ButtonAdd></ButtonAdd>
          <ButtonCancel onClick={closeModal}></ButtonCancel>
        </form>
      </ContainerForm>
    </Modal>
  );
};
