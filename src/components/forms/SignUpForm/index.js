import React from "react";
import {Form, withFormik} from 'formik';
import {signUpSchema} from "../../../validationSchema";
import styles from './SignUpForm.module.scss';
import { NavLink } from 'react-router-dom';
import {fieldValues} from '../../../formsDataAndUtils/formsData'
import {renderFields} from '../../../formsDataAndUtils/formsUtils'
import store from '../../../store';
import {ACTION_TYPES} from "../../../actions";

const handleSubmit = value => {
    const noConfirmPassword = ({confirmPassword, ...rest}) => rest;
    const preparedValue = noConfirmPassword(value);
    store.dispatch({
       type: ACTION_TYPES.LOGIN_USER_REQUEST,
       data: {...preparedValue, formType: 'signUp'},
    });
};

function SignUpForm(props) {

    return (
      <>
      <div className={styles.formWrapper}>
        <h1>Sign Up</h1>
        <h4>Please fill in this form to create an account</h4>
        <Form className={styles.container}>
            {
                renderFields(fieldValues)
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