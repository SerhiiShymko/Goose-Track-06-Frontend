import { FeedbackFormContainer, CloseModalBtn } from './FeedbackForm.styled';

const FeedbackForm = ({ closeModal }) => {
  return (
    <FeedbackFormContainer>
      FeedbackForm
      <CloseModalBtn type="button" onClick={closeModal}>
        Кнопка закриття модалки
      </CloseModalBtn>
    </FeedbackFormContainer>
  );
};
export default FeedbackForm;
