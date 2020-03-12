import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const SignUpPage = lazy( () => import( './pages/SignUpPage.js' ) );
const SignInPage = lazy( () => import( './pages/SignInPage.js' ) );
const fallbackElem = <div className='loader'>Loading...</div>;

function App() {
  return (
      <Router>
          <Suspense fallback={fallbackElem}>
              <Switch>
                  <Route path={['/signup', '/sign_up']} component={SignUpPage}/>
                  <Route path={['/signin', '/sign_in', '/login']} component={SignInPage}/>
              </Switch>
          </Suspense>
      </Router>
  );
}

export default App;
