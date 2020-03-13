import React from "react";
import {Form, withFormik} from 'formik';
import {signUpSchema} from "../../validationSchema";
import styles from './SignUpForm.module.scss';
import { NavLink } from 'react-router-dom';
import withField from '../HOC_withField'
import Input from '../Input';
import PasswordInput from '../PasswordInput';

const handleSubmit = value => {
    const noPassword = ({confirmPassword, ...rest}) => rest;
    const preparedValue = noPassword(value);
    console.dir(preparedValue);
};

function SignUpForm(props) {

    return (
      <>
      <div className={styles.formWrapper}>
        <h1>Sign Up</h1>
        <h4>Please fill in this form to create an account</h4>
        <Form className={styles.container}>
          {
            withField(Input)({name: 'firstName'})({placeholder: 'First Name'})
          }
          {
            withField(Input)({name: 'lastName'})({placeholder: 'Last Name'})
          }
          {
            withField(Input)({name: 'email'})({placeholder: 'Email', type: 'email'})
          }
          {
            withField(PasswordInput)({name: 'password'})({placeholder: 'Password', type: 'password'})
          }
          {
            withField(PasswordInput)({name: 'confirmPassword'})({placeholder: 'Confirm Password', type: 'password'})
          }
          <div className={styles.confirmButton} onClick={props.submitForm}>Sign Up</div>
        </Form>
      </div>
        <NavLink className={styles.navLink} to='./sign_in'>Already have an account? Login here</NavLink>
      </>
    );
}

export default withFormik({
    mapPropsToValues: () => ({firstName: '', lastName: '', email: '', password: '', confirmPassword: '',}),
    validationSchema: signUpSchema,
    handleSubmit,
})(SignUpForm);