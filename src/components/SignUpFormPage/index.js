import React from 'react';
import SignUpForm from "../SignUpForm";
import styles from './SignUpFormPage.module.scss';

function SignUpFormPage(props) {
    return (
        <div className={styles.formWrapper}>
            <h1>Sign Up</h1>
            <h4>Please fill in this form to create an account!</h4>
            <SignUpForm/>
        </div>
    );
}

export default SignUpFormPage;