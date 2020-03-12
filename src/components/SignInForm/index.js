import React from "react";
import {Form, withFormik} from 'formik';
import {signInSchema} from "../../validationSchema";
import styles from '../SignUpForm/SignUpForm.module.scss';
import newStyles from './SignInForm.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import {renderFieldWithCustomInput} from '../../utils/renderFieldWithCustomInput';

const handleSubmit = value => {
  const noPassword = ({confirmPassword, ...rest}) => rest;
  const preparedValue = noPassword(value);
  console.dir(preparedValue);
};

function SignInForm(props) {

  return (
    <>
      <div className={styles.formWrapper}>
        <h1>Sign In</h1>
        <h4>Please fill in this form to login!</h4>
        <Form className={classNames(styles.container, newStyles.signInFormContainer)}>
          {
            renderFieldWithCustomInput({name: 'email'}, {placeholder: 'Email', type: 'email'})
          }
          {
            renderFieldWithCustomInput({name: 'password'}, {placeholder: 'Password', type: 'password'})
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