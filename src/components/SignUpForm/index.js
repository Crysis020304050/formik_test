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
      <div className={styles.formWrapper}>
        <h1>Sign Up</h1>
        <h4>Please fill in this form to create an account!</h4>
        <Form className={styles.container}>
          <Field name="firstName" >
            {
              fieldProps => <Input {...fieldProps} placeholder="First Name" type="text"/>
            }
          </Field>

          <Field name="lastName" >
            {
              fieldProps => <Input {...fieldProps} placeholder="Last Name" type="text"/>
            }
          </Field>

          <Field name="email" >
            {
              fieldProps => <Input {...fieldProps} placeholder="Email" type="email" autocomplete="username"/>
            }
          </Field>

          <Field name="password" >
            {
              fieldProps => <PasswordInput {...fieldProps} placeholder="Password" type="password" autocomplete="new-password"/>
            }
          </Field>

          <Field name="confirmPassword" >
            {
              fieldProps => <PasswordInput {...fieldProps} placeholder="Confirm Password" type="password" autocomplete="new-password"/>
            }
          </Field>
          <div className={styles.confirmButton} onClick={props.submitForm}>Sign Up</div>
        </Form>
      </div>

    );
}

export default withFormik({
    mapPropsToValues: () => ({firstName: '', lastName: '', email: '', password: '', confirmPassword: '',}),
    validationSchema: signUpSchema,
    handleSubmit,
})(SignUpForm);