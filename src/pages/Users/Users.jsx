import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/api';

const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const data = await fetchUsers();
            setUsers(data)
        };
        getData();
    }, []);
  return (
      <div>
          <h1>Users</h1>
          <ul style={{ border: '1px solid #ccc', fontSize: '2rem' }}>{users.map(user => ( <li key={user.id} >{user.firstName} {user.lastName}</li>))}
          </ul>
    </div>
  )
}

export default Users