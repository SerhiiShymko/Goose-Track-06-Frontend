import { useState } from 'react';

import { FeedbackBtn } from './AddFeedbackBtn.styled';
import AddFeedbackModal from 'components/AddFeedbackModal/AddFeedbackModal';

const AddFeedbackBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <FeedbackBtn type="button" onClick={openModal}>
        Feedback
      </FeedbackBtn>
      {showModal && <AddFeedbackModal closeModal={closeModal} />}
    </>
  );
};
export default AddFeedbackBtn;
