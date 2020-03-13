import React from 'react';
import { Field } from 'formik';

const withField = (WrappedComponent) => (fieldOptions) => {

  return (inputProps) => {
    return (
      <Field {...fieldOptions}>
        {
          fieldProps => <WrappedComponent {...fieldProps} {...inputProps}/>
        }
      </Field>
    );
  }
};

export default withField;