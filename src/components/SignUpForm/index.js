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

  const renderFieldWithCustomInput = (fieldProps, inputProps) => {
    const inputComponent = fieldProps => inputProps.type === 'password' ? <PasswordInput {...fieldProps} {...inputProps}/> : <Input {...fieldProps} {...inputProps}/>;
      return (
        <Field {...fieldProps}>
          {
            fieldProps => inputComponent(fieldProps)
          }
        </Field>
      );
  };
    return (
      <div className={styles.formWrapper}>
        <h1>Sign Up</h1>
        <h4>Please fill in this form to create an account!</h4>
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

    );
}

export default withFormik({
    mapPropsToValues: () => ({firstName: '', lastName: '', email: '', password: '', confirmPassword: '',}),
    validationSchema: signUpSchema,
    handleSubmit,
})(SignUpForm);