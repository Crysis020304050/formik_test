import React from 'react';
import { Field } from 'formik';

export const withField = (WrappedComponent) => (fieldOptions) => {

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

export const renderFields = (fieldsValues) => {
    return fieldsValues.map(fieldValues => {
        const {component, fieldOptions, inputProps} = fieldValues;
        return withField(component)(fieldOptions)(inputProps);
    })
};