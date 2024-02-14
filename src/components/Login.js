// src/components/Login.js
import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Login = ({ onFacebookLogin }) => {
  const responseFacebook = (response) => {
    onFacebookLogin(response.accessToken);
  };

  return (
    <div>
      <h2>Login with Facebook</h2>
      <FacebookLogin
        appId="your_facebook_app_id"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default Login;
