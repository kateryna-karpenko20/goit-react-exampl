// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { fetchUsers } from '../../services/api';



// const UserDetails = () => {
//     const {userId} = useParams();

//     const [ user, setUser ] = useState(null);
//     useEffect(() => {
//         const getData = async () => {
//             const data = await fetchUsers(userId);
//             setUser(data);
//         }
//         getData();
//     }, [userId])
    
    
//     return (
//         <div>
//             {/* User details №{userId} */}
//             <img src={user.image} alt="avatar" />
//             <h2>{user.firstName} {user.lastName}</h2>
//             <p>{user.email}</p>
//             <p>{user.phone}</p>
//         </div>
//   )
// }

// export default UserDetails











import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchUsersById } from '../../services/api';


const UserDetails = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [showInfo, setShowInfo] = useState(false); // Стан для відображення інформації

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchUsersById(userId);
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        getData();
    }, [userId]);

    if (!user) {
        return <p>Loading...</p>;
    }

    // Інформація про користувача
    const info = (
        <div>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Country: {user.address?.country || 'N/A'}</p>
            <p>City: {user.address?.city || 'N/A'}</p>
            <p>Street: {user.address?.address || 'N/A'}</p>
            <p>Weight: {user.weight}</p>
            <p>Height: {user.height}</p>
        </div>
    );

    return (
        <div>
            <img src={user.image} alt="avatar" />
            <h2>FullName: {user.firstName} {user.lastName}</h2>
            <nav>
                {/* Лінк для відображення info */}
                <button style={{marginRight: '10px', border: 'none', background: 'none'}} onClick={() => setShowInfo(prev => !prev)}>
                    {showInfo ? 'Hide Info' : 'Show Info'}
                </button>
                <Link to="posts">Show posts</Link>
            </nav>
            <Outlet />
            {/* Відображення інформації при натисканні на лінк */}
            {showInfo && info}
        </div>
    );
};

export default UserDetails;
