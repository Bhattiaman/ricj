// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';



function App() {
  const handleLogin = (user) => {
    console.log('User logged in:', user);
    // Handle login logic, e.g., store user data in local storage
  };

  const handleSignup = (user) => {
    console.log('User signed up:', user);
    // Handle signup logic, e.g., redirect user to login page
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <SignupPage onSignup={handleSignup} />
          </Route>
          <Route path="/login">
            <LoginPage onLogin={handleLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
