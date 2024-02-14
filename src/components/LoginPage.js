// src/components/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
