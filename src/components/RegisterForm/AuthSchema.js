import * as Yup from 'yup';
//
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
// const PASSWD_REGEX =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;
//
export const validateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .matches(emailRegexp, { message: 'This is an ERROR email' })
    .required('Please create an email'),
  password: Yup.string()
    .min(5)
    // .matches(PASSWD_REGEX, { message: 'This is an ERROR password' })
    .required(`Please create password`),
});
