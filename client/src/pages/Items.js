import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Items = () => {
  const [user, setUser] = useState('');
  const [items, setItems] = useState([]);
  const history = useHistory();
  useEffect(() => {
    async function fetchData(data) {
      const response = await fetch('http://localhost:4000/items/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const resJson = await response.json();
      setItems(resJson.data);
    }
    try {
      const token = localStorage.getItem('token');
      const result = jwt.verify(token, 'mercari');

      setUser(result.nickname);
      fetchData(result);
    } catch (err) {
      history.push('/');
    }
  }, []);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        columnGap: 20,
      }}>
      <div>{user}が出品した商品</div>
      {items.length
        ? items.map((item) => {
            return (
              <div>
                <img src={item.img_url} />
                <div>{item.description}</div>
                <div>{item.price}</div>
                <div>{item.likes}</div>
              </div>
            );
          })
        : null}{' '}
    </div>
  );
};

export default Items;
