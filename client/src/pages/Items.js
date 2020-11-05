import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Items = () => {
  const history = useHistory();
  useEffect(() => {
    async function fetchData(user) {
      console.log('fetchdata', JSON.stringify(user));
      const response = await fetch('http://localhost:4000/items/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      console.log('itemms response', response);
    }
    try {
      const token = localStorage.getItem('token');
      const user = jwt.verify(token, 'mercari');
      fetchData(user);
    } catch (err) {
      history.push('/');
    }
  }, []);
  return <div>items page</div>;
};

export default Items;
