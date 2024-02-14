// src/components/LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const response = await axios.post('/api/auth/login', { email, password });
      onLogin(response.data.user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Send Google login response to backend for authentication
  };

  const responseFacebook = (response) => {
    console.log(response);
    // Send Facebook login response to backend for authentication
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <div>
        <p>Or login with:</p>
        <GoogleLogin
          clientId="your_google_client_id"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <FacebookLogin
          appId="your_facebook_app_id"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          textButton="Login with Facebook"
          cssClass="facebook-login"
        />
      </div>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default LoginForm;
