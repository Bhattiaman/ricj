// src/components/SignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

const SignupPage = ({ onSignup }) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm onSignup={onSignup} />
    </div>
  );
};

export default SignupPage;
