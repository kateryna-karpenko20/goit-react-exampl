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











// Імпортуємо необхідні бібліотеки та функції з інших файлів.
// React — для створення компонентів та використання хуків.
// useEffect і useState — для роботи зі станом і побічними ефектами.
// useParams — для отримання параметрів URL (наприклад, userId).
// Link — для створення лінків, які дозволяють переміщатися по сторінках додатку.
// Outlet — для відображення дочірніх маршрутів, якщо вони є (наприклад, сторінка постів користувача).
// fetchUsersById — функція для отримання даних користувача за його ID (імпортується з файлу api).
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchUsersById } from '../../services/api';

const UserDetails = () => {
    // Використовуємо useParams для отримання параметра userId з URL.
    // Цей параметр надається, коли ми, наприклад, переходимо за адресою типу "/users/123".
    const { userId } = useParams();

    // Стан для зберігання даних про користувача.
    const [user, setUser] = useState(null);
    // Стан для управління показом/приховуванням додаткової інформації про користувача.
    const [showInfo, setShowInfo] = useState(false);

    // Використовуємо useEffect для виконання асинхронного запиту до API після того, як компоненти були змонтовані.
    useEffect(() => {
        // Оголошуємо асинхронну функцію для отримання даних користувача.
        const getData = async () => {
            try {
                // Викликаємо fetchUsersById, передаючи userId для отримання конкретного користувача.
                const data = await fetchUsersById(userId);
                // Оновлюємо стан, зберігаючи отримані дані.
                setUser(data);
            } catch (error) {
                // Якщо виникла помилка під час запиту, виводимо її в консоль.
                console.error('Error fetching user:', error);
            }
        };
        // Викликаємо функцію для отримання даних.
        getData();
    }, [userId]); // Залежність від userId, щоб при його зміні запит виконувався знову.

    // Якщо дані про користувача ще не завантажені, відображаємо повідомлення про завантаження.
    if (!user) {
        return <p>Loading...</p>;
    }

    // Створюємо JSX елементи для відображення додаткової інформації про користувача.
    const info = (
        <div>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Country: {user.address?.country || 'N/A'}</p> {/* Якщо немає країни, показуємо 'N/A' */}
            <p>City: {user.address?.city || 'N/A'}</p> {/* Якщо немає міста, показуємо 'N/A' */}
            <p>Street: {user.address?.address || 'N/A'}</p> {/* Якщо немає вулиці, показуємо 'N/A' */}
            <p>Weight: {user.weight}</p>
            <p>Height: {user.height}</p>
        </div>
    );

    return (
        <div>
            {/* Відображаємо аватар користувача */}
            <img src={user.image} alt="avatar" />
            {/* Виводимо ім'я користувача: ім'я та прізвище */}
            <h2>FullName: {user.firstName} {user.lastName}</h2>
            <nav>
                {/* Кнопка для показу/приховування додаткової інформації */}
                <button style={{marginRight: '10px', border: 'none', background: 'none'}} 
                    onClick={() => setShowInfo(prev => !prev)}>
                    {/* Змінюємо текст на кнопці в залежності від стану showInfo */}
                    {showInfo ? 'Hide Info' : 'Show Info'}
                </button>
                {/* Лінк для переходу на сторінку постів користувача */}
                <Link to="posts">Show posts</Link>
            </nav>
            {/* Outlet дозволяє відображати дочірні компоненти для цього маршруту, якщо вони існують */}
            <Outlet />
            {/* Якщо showInfo == true, відображаємо додаткову інформацію */}
            {showInfo && info}
        </div>
    );
};

export default UserDetails;
