import React from "react";
import {Form, Field, withFormik} from 'formik';
import {signUpSchema} from "../../validationSchema";
import Input from "../Input";
import PasswordInput from '../PasswordInput';
import styles from './SignUpForm.module.scss';

const handleSubmit = value => {
    const noPassword = ({confirmPassword, ...rest}) => rest;
    const preparedValue = noPassword(value);
    console.dir(preparedValue);
};

function SignUpForm(props) {

    return (
      <Form className={styles.container}>
          <Field name="firstName" >
              {
                  fieldProps => <Input {...fieldProps} label="First name:" type="text"/>
              }
          </Field>

          <Field name="lastName" >
              {
                  fieldProps => <Input {...fieldProps} label="Last name:" type="text"/>
              }
          </Field>

          <Field name="email" >
              {
                  fieldProps => <Input {...fieldProps} label="Email:" type="email" autocomplete="username"/>
              }
          </Field>

          <Field name="password" >
              {
                  fieldProps => <PasswordInput {...fieldProps} label="Password:" type="password" autocomplete="new-password"/>
              }
          </Field>

          <Field name="confirmPassword" >
              {
                  fieldProps => <PasswordInput {...fieldProps} label="Confirm password:" type="password" autocomplete="new-password"/>
              }
          </Field>
          <div className={styles.confirmButton} onClick={props.submitForm}>Sign Up</div>
      </Form>
    );
}

export default withFormik({
    mapPropsToValues: () => ({firstName: '', lastName: '', email: '', password: '', confirmPassword: '',}),
    validationSchema: signUpSchema,
    handleSubmit,
})(SignUpForm);