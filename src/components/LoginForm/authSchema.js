import * as Yup from 'yup';
//
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
//
export const validateSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, { message: 'This is an ERROR email' })
    .required('Please create an email'),
  password: Yup.string().min(5).required(`Please create password`),
});
