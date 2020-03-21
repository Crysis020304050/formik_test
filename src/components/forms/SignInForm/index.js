import React from "react";
import {Form, withFormik} from 'formik';
import {signInSchema} from "../../../validationSchema";
import styles from '../SignUpForm/SignUpForm.module.scss';
import newStyles from './SignInForm.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import {fieldValues} from '../../../formsDataAndUtils/formsData'
import {renderFields} from '../../../formsDataAndUtils/formsUtils'
import store from "../../../store";
import {ACTION_TYPES} from "../../../actions";

const signInFieldsValues = [fieldValues[2], fieldValues[3]];

const handleSubmit = value => {
    store.dispatch({
        type: ACTION_TYPES.LOGIN_USER_REQUEST,
        data: value,
    });
};

function SignInForm(props) {

  return (
    <>
      <div className={styles.formWrapper}>
        <h1>Sign In</h1>
        <h4>Please fill in this form to login</h4>
        <Form className={classNames(styles.container, newStyles.signInFormContainer)}>
            {
                renderFields(signInFieldsValues)
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