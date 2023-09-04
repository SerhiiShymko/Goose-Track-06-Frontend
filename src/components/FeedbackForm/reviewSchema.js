import * as Yup from 'yup';

export const validateSchema = Yup.object().shape({
  comment: Yup.string()
    .min(5)
    .max(300)
    .required(`Review must be from 5 to 300 characters`),
});
