import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Formik, Form, Field } from 'formik';
import {
  addReview,
  deleteReview,
  updateReview,
} from 'redux/reviews/operations';
import {
  selectError,
  selectIsLoading,
  selectOwnReview,
} from 'redux/reviews/selectors';

import {
  FeedbackFormContainer,
  ButtonClose,
  CloseSvg,
  ButtonPencil,
  PencilSvg,
  ButtonTrash,
  TrashSvg,
  Paragraph,
  LeggendContainer,
  ButtonsContainer,
  TextArea,
  ButtonSubmit,
  ButtonCancel,
  Text,
} from './FeedbackForm.styled';
import Spinner from 'components/Spinner/Spinner';
import { validateSchema } from './reviewSchema';

const FeedbackForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const ownReview = useSelector(selectOwnReview);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [ratingValue, setRatingValue] = useState(4);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (ownReview) {
      setRatingValue(Number(ownReview.rating));
    }
  }, [ownReview]);

  const handleSubmit = async ({ comment }, actions) => {
    const rating = ratingValue.toString();
    const review = {
      comment,
      rating,
    };

    await dispatch(isEditing ? updateReview(review) : addReview(review));

    if (error) {
      Notify.failure(error, {
        position: 'center-top',
      });
    } else {
      isEditing
        ? Notify.success('Review editted successfully!', {
            position: 'center-top',
          })
        : Notify.success('Review added successfully!', {
            position: 'center-top',
          });

      closeModal();
    }
  };

  const handleDelete = async () => {
    await dispatch(deleteReview());

    if (error) {
      Notify.failure(error, {
        position: 'center-top',
      });
    } else {
      Notify.success('Review deleted successfully!', {
        position: 'center-top',
      });

      closeModal();
    }
  };

  const handlePencilClick = () => {
    setIsEditing(true);
  };

  return (
    <FeedbackFormContainer>
      {isLoading && <Spinner />}
      <ButtonClose type="button" onClick={closeModal}>
        <CloseSvg />
      </ButtonClose>
      <Paragraph>Rating</Paragraph>
      <Rating
        style={{ marginTop: 8 }}
        name="simple-controlled"
        value={ratingValue}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
        }}
        emptyIcon={
          <StarIcon
            style={{
              color: '#353647',
              opacity: 0.5,
            }}
            fontSize="inherit"
          />
        }
      />
      <LeggendContainer>
        <Paragraph>Review</Paragraph>
        {ownReview && (
          <ButtonsContainer>
            <ButtonPencil onClick={handlePencilClick}>
              <PencilSvg />
            </ButtonPencil>
            <ButtonTrash onClick={handleDelete}>
              <TrashSvg />
            </ButtonTrash>
          </ButtonsContainer>
        )}
      </LeggendContainer>
      <Formik
        initialValues={{ comment: ownReview ? ownReview.comment : '' }}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form>
            <Field
              name="comment"
              as={TextArea}
              placeholder="Enter text"
              disabled={ownReview && !isEditing ? true : false}
            ></Field>
            <Text color="#DA1414">{errors.comment}</Text>
            {!ownReview && (
              <>
                <ButtonSubmit type="submit">Save</ButtonSubmit>
                <ButtonCancel type="button" onClick={closeModal}>
                  Cancel
                </ButtonCancel>
              </>
            )}
            {isEditing && (
              <>
                <ButtonSubmit type="submit">Edit</ButtonSubmit>
                <ButtonCancel type="button" onClick={closeModal}>
                  Cancel
                </ButtonCancel>
              </>
            )}
          </Form>
        )}
      </Formik>
    </FeedbackFormContainer>
  );
};
export default FeedbackForm;
