import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/api';
import { Link } from 'react-router-dom';

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
          <ul style={{ fontSize: '20px',height: '300px', display: 'flex', flexWrap: 'wrap', gap: '10px', flexDirection: 'column' }}>{users.map(user => ( <li key={user.id} ><Link to={user.id.toString()}>{user.firstName} {user.lastName}</Link></li>))}
          </ul>
    </div>
  )
}

export default Users