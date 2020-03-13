import React from "react";
import {Form, withFormik} from 'formik';
import {signInSchema} from "../../validationSchema";
import styles from '../SignUpForm/SignUpForm.module.scss';
import newStyles from './SignInForm.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import withField from '../HOC_withField'
import Input from '../Input';
import PasswordInput from '../PasswordInput';

const handleSubmit = value => {
  console.dir(value);
};

function SignInForm(props) {

  return (
    <>
      <div className={styles.formWrapper}>
        <h1>Sign In</h1>
        <h4>Please fill in this form to login</h4>
        <Form className={classNames(styles.container, newStyles.signInFormContainer)}>
          {
            withField(Input, {name: 'email'}, {placeholder: 'Email', type: 'email'})
          }
          {
            withField(PasswordInput,{name: 'password'}, {placeholder: 'Password', type: 'password'})
          }
          <div className={styles.confirmButton} onClick={props.submitForm}>Sign In</div>
        </Form>
      </div>
      <NavLink className={styles.navLink} to='./sign_up'>Dont have an account? Register here</NavLink>
    </>
  );
}

export default withFormik({
                            mapPropsToValues: () => ({ email: '', password: ''}),
                            validationSchema: signInSchema,
                            handleSubmit,
                          })(SignInForm);