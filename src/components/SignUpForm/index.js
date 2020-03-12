import React from "react";
import {Form, withFormik} from 'formik';
import {signUpSchema} from "../../validationSchema";
import styles from './SignUpForm.module.scss';
import { NavLink } from 'react-router-dom';
import {renderFieldWithCustomInput} from '../../utils/renderFieldWithCustomInput';

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
            renderFieldWithCustomInput({name: 'firstName'}, {placeholder: 'First Name'})
          }
          {
            renderFieldWithCustomInput({name: 'lastName'}, {placeholder: 'Last Name'})
          }
          {
            renderFieldWithCustomInput({name: 'email'}, {placeholder: 'Email', type: 'email'})
          }
          {
            renderFieldWithCustomInput({name: 'password'}, {placeholder: 'Password', type: 'password'})
          }
          {
            renderFieldWithCustomInput({name: 'confirmPassword'}, {placeholder: 'Confirm Password', type: 'password'})
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