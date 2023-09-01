import * as Yup from 'yup';
//
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
// const PASSWD_REGEX =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;
//
export const validateSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_REGEX, { message: 'This is an ERROR email' })
    .required('Please create an email'),
  password: Yup.string()
    .min(5)
    // .matches(PASSWD_REGEX, { message: 'This is an ERROR password' })
    .required(`Please create password`),
});
