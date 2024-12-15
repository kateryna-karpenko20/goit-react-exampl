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
import { useParams } from 'react-router-dom';
import { fetchUsersById } from '../../services/api'; // Використовуємо нову функцію для отримання конкретного користувача

const UserDetails = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null); // Виправлено синтаксис useState

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchUsersById(userId); // Отримуємо дані конкретного користувача
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        getData();
    }, [userId]);

    // Перевірка, чи дані завантажені
    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {/* Відображаємо деталі користувача */}
            <img src={user.image} alt="avatar" />
            <h2>FullName: {user.firstName} {user.lastName}</h2> {/* Виправлено lastNme */}
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Country: {user.address.country}</p>
            <p>City: {user.address.city}</p>
            <p>Street: {user.address.address}</p>
            <p>Weight: {user.weight}</p>
            <p>Height: {user.height}</p>
        </div>
    );
};

export default UserDetails;
