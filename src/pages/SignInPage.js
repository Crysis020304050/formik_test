import React          from 'react';
import { withRouter } from 'react-router';
import SignInForm from "../components/SignInForm";

function SignInPage(props) {
    return (
        <SignInForm/>
    );
}

export default withRouter(SignInPage);