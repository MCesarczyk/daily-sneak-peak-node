import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    axios.get('/api/welcome')
      .then(({ data }) => setState(data))
  }, [])


  return (
    <div>
      <p>Welcome to:</p>
      <h1 data-testid="hero">{state}</h1>
    </div>
  )
};

export default Home;