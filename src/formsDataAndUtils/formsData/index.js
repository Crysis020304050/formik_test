import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";

export const fieldValues = [
    {
        component: Input,
        fieldOptions: {
            name: 'firstName',
        },
        inputProps: {
            placeholder: 'First Name'
        },
    },
    {
        component: Input,
        fieldOptions: {
            name: 'lastName',
        },
        inputProps: {
            placeholder: 'Last Name'
        },
    },
    {
        component: Input,
        fieldOptions: {
            name: 'email',
        },
        inputProps: {
            placeholder: 'Email',
            type: 'email',
        },
    },
    {
        component: PasswordInput,
        fieldOptions: {
            name: 'password',
        },
        inputProps: {
            placeholder: 'Password',
            type: 'password',
        },
    },
    {
        component: PasswordInput,
        fieldOptions: {
            name: 'confirmPassword',
        },
        inputProps: {
            placeholder: 'Confirm Password',
            type: 'password',
        },
    },
];
