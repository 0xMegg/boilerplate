/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { loginUser } from '../../../_actions/user_action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // eslint-disable-next-line prefer-const
    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body))
      .then(response => {
        if (response.payload.loginSuccess) {
          navigate(-1);
        } else {
          // eslint-disable-next-line no-alert
          alert('Error');
        }
      });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
    }}
    >
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Email</label>
        <input type='email' value={Email} onChange={onEmailHandler} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Password</label>
        <input type='password' value={Password} onChange={onPasswordHandler} />
        <br />
        {/* eslint-disable-next-line react/button-has-type */}
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
