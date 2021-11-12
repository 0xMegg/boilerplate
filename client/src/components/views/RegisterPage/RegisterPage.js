/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { registerUser } from '../../../_actions/user_action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  // eslint-disable-next-line consistent-return
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      // eslint-disable-next-line no-alert
      return alert('Confirm your password');
    }

    // eslint-disable-next-line prefer-const
    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

    dispatch(registerUser(body))
      .then(response => {
        if (response.payload.success) {
          navigate(-1);
        } else {
          // eslint-disable-next-line no-alert
          alert('Register Error');
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
        <label>Name</label>
        <input type='text' value={Name} onChange={onNameHandler} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Password</label>
        <input type='password' value={Password} onChange={onPasswordHandler} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Confirm Password</label>
        <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
        <br />
        {/* eslint-disable-next-line react/button-has-type */}
        <button>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
