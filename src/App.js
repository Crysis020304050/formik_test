import React from 'react';
import SignUpForm from "./components/SignUpForm";
import SignInForm from './components/SignInForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <SignUpForm/>
      {/*<SignInForm/>*/}
    </Router>

  );
}

export default App;
