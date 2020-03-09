import React from "react";
import {Form, Field, withFormik} from 'formik';
import {signUpSchema} from "../../validationSchema";
import Input from "../Input";
import styles from './SignUpForm.module.scss';

const handleSubmit = value => {
    console.dir(value);
};

function SignUpForm(props) {

    return (
      <Form className={styles.container}>
          <Field type="text" name="firstName" >
              {
                  fieldProps => <Input {...fieldProps} label="First name:"/>
              }
          </Field>

          <Field type="text" name="lastName" >
              {
                  fieldProps => <Input {...fieldProps} label="Last name:"/>
              }
          </Field>

          <Field type="email" name="email" >
              {
                  fieldProps => <Input {...fieldProps} label="Email:"/>
              }
          </Field>

          <Field type="password" name="password" >
              {
                  fieldProps => <Input {...fieldProps} label="Password:"/>
              }
          </Field>
          <div className={styles.confirmButton} onClick={props.submitForm}>Sign Up</div>
      </Form>
    );
}

export default withFormik({
    mapPropsToValues: () => ({firstName: '', lastName: '', email: '', password: ''}),
    validationSchema: signUpSchema,
    handleSubmit,
})(SignUpForm);