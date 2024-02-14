// src/components/Signup.js
import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Signup = ({ onFacebookSignup }) => {
  const responseFacebook = (response) => {
    onFacebookSignup(response.accessToken);
  };

  return (
    <div>
      <h2>Sign up with Facebook</h2>
      <FacebookLogin
        appId="your_facebook_app_id"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default Signup;
