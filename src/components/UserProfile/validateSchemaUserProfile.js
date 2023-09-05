import * as Yup from 'yup';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
const birthdayRegexp = /^\d{4}-\d{2}-\d{2}$/;
const phoneRegexp = /^\+380\d{2}\d{3}\d{2}\d{2}$/;

export const validateSchemaUserProfile = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .matches(emailRegexp, { message: 'This is an ERROR email' })
    .required('Please enter an email'),
  birthday: Yup.string()
    .matches(birthdayRegexp, {
      message: 'Please enter data in the correct format(yyyy-mm-dd)',
    })
    .max(new Date())
    .required('Please enter your birthday'),
  phone: Yup.string()
    .required('Please enter your phone number')
    .matches(phoneRegexp, { message: 'Please enter your mobile phone in format(+380)  ' }),
  skype: Yup.string().required('Please enter your skype'),
});
