import React, { Component } from 'react';
import { withRouter }       from 'react-router';
import Navigation           from '../../components/Navigation';
import './HomePage.module.scss'

class HomePage extends Component {

    render () {
        return (
            <>
                <h1>Home Page!</h1>
                <Navigation/>
            </>
        );
    }
}

export default withRouter( HomePage );