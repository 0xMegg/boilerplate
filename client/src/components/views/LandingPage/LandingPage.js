import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
  useEffect(() => {
    axios.get('/api/hello')
      // eslint-disable-next-line no-console
      .then((response) => console.log(response.data));
  }, []);

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    // eslint-disable-next-line no-console
      .then((response) => { console.log(response.data); });
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
      <h2>Starting Page</h2>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={onClickHandler}>Logout</button>
    </div>
  );
}

export default LandingPage;
