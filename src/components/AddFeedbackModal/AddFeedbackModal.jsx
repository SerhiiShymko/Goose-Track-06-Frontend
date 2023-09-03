import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import { Modal } from 'components/Modal/Modal';

const AddFeedbackModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <FeedbackForm closeModal={closeModal} />
    </Modal>
  );
};
export default AddFeedbackModal;
