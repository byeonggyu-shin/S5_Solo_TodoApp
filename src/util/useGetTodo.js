import { useEffect, useState } from 'react';

export function GetTodo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return [data, setData];
}
