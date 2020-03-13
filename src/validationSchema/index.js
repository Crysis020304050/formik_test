import * as yup from 'yup';

const NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;
const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?\-^]{8,60}$/;
const namePatternMessage = name => `${name} name must starts with capital letter, contains only alphabet letters and be not longer than 63 characters`;
const passwordPatternMessage = 'Password should be 8 to 60 characters long, must contain uppercase and lowercase letters and numbers';

export const signUpSchema = yup.object().shape({
    firstName: yup.string().required().matches(NAME_PATTERN, namePatternMessage('First')).label('First name'),
    lastName: yup.string().required().matches(NAME_PATTERN, namePatternMessage('Last')).label('Last name'),
    email: yup.string().email().required().label('Email'),
    password: yup.string().min(8).required().matches(PASSWORD_PATTERN, passwordPatternMessage).label('Password'),
    confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Both password need to be the same').label('Confirm password'),
});

export const signInSchema = yup.object().shape({
                                                   email: yup.string().email().required().label('Email'),
                                                   password: yup.string().min(8).required().matches(PASSWORD_PATTERN, passwordPatternMessage).label('Password'),
                                               });
