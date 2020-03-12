import React from "react";
import {Field} from 'formik';
import Input from "../../components/Input";
import PasswordInput from '../../components/PasswordInput';

export const renderFieldWithCustomInput = (fieldProps, inputProps) => {
  const inputComponent = fieldProps => inputProps.type === 'password' ? <PasswordInput {...fieldProps} {...inputProps}/> : <Input {...fieldProps} {...inputProps}/>;
  return (
    <Field {...fieldProps}>
      {
        fieldProps => inputComponent(fieldProps)
      }
    </Field>
  );
};