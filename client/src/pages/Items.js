import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Items = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    jwt.verify(token, 'mercari', (err, user) => {
      if (err) {
        history.push('/');
      }
      const response = await fetch('/users/items', {
          method: 'POST',
          body: user
      })
      console.log('response', response)
    }),
      [];
  });
  return <div>items page</div>;
};

export default Items;
