import React from 'react';
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <SignUpForm/>
    </Router>

  );
}

export default App;
