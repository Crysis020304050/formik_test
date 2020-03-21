import React, {lazy, Suspense, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import {REFRESH_TOKEN_KEY} from "./contants";
import store from './store';
import {ACTION_TYPES} from "./actions";

const SignUpPage = lazy( () => import( './pages/SignUpPage' ) );
const SignInPage = lazy( () => import( './pages/SignInPage' ) );
const HomePage = lazy(() => import('./pages/HomePage'));
const fallbackElem = <div className={styles.loader}>Loading...</div>;

function App() {
    useEffect( () => {
        if (localStorage.getItem(REFRESH_TOKEN_KEY)) {
            store.dispatch({
                type: ACTION_TYPES.LOGIN_USER_REQUEST,
            });
        }
    }, []);
  return (
      <Router>
          <Suspense fallback={fallbackElem}>
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path={['/signup', '/sign_up']} component={SignUpPage}/>
                  <Route path={['/signin', '/sign_in', '/login']} component={SignInPage}/>
              </Switch>
          </Suspense>
      </Router>
  );
}

export default App;
