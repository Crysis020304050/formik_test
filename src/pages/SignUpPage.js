import React          from 'react';
import { withRouter } from 'react-router';
import SignUpForm from "../components/SignUpForm";

function SignUpPage(props) {
    return (
        <SignUpForm/>
    );
}

export default withRouter(SignUpPage);