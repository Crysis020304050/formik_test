import React          from 'react';
import { withRouter } from 'react-router';
import SignUpForm from "../../components/forms/SignUpForm";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
import './SignUpPage.module.scss';

function SignUpPage({user}) {

    return (
        user
            ? <Redirect to={'/'}/>
            : <SignUpForm/>
    );
}

const mapStateToProps = state => state.authStore;

export default connect(mapStateToProps)(withRouter(SignUpPage));