import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import RegisterBox from '../components/auth/RegisterBox';
import LogInBox from '../components/auth/LogInBox';

const Auth = (props) => {
  const [state, setState] = useState('Register');

  return (
    <div
      className={`h-[100vh] flex items-center justify-center bg-cover ${
        props.theme === 'light' ? 'bg-authDayBg' : 'bg-authNightBg'
      }`}
    >
      <Navbar theme={props.theme} setTheme={props.setTheme} />
      {state === 'Register' ? (
        <RegisterBox setState={setState} theme={props.theme} />
      ) : (
        <LogInBox setState={setState} theme={props.theme} />
      )}
    </div>
  );
};

export default Auth;
