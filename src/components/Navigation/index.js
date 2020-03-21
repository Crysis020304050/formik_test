import React       from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {ACTION_TYPES} from "../../actions";
import {REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY} from "../../contants";

const Navigation = ({user, logOut}) => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                {!user && <li><NavLink to="/sign_in">Sign In</NavLink></li>}
                {!user && <li><NavLink to="/sign_up">Sign Up</NavLink></li>}
                {user && <li><button onClick={() => {
                    localStorage.removeItem(REFRESH_TOKEN_KEY);
                    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
                    logOut();
                }
                }>Log Out</button></li>}
            </ul>
        </nav>
    );
};

const mapStateToProps = state => state.authStore;

const mapDispatchToProps = dispatch => {
  return {
      logOut: () => dispatch({
         type: ACTION_TYPES.USER_LOGOUT,
      }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);