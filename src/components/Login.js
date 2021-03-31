import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const onNavigate = () => {
    history.push('/dashboard');
  };
  return (
    <>
      <h1>LOGIN</h1>
      <a onClick={onNavigate}>Dashboard</a>
    </>
  );
};

export default Login;
