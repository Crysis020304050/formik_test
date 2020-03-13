import React from 'react';
import { Field } from 'formik';

function withField (WrappedComponent, fieldProps, inputProps) {
  return (
    <Field {...fieldProps}>
      {
        fieldProps => <WrappedComponent {...fieldProps} {...inputProps}/>
      }
    </Field>
  )
}

export default withField;