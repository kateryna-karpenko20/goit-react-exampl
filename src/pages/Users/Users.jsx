// Імпортуємо необхідні бібліотеки та компоненти:
// React — для створення компонентів та використання хуків.
// useState та useEffect — для управління станом і побічними ефектами.
// fetchUsers — функція для отримання списку користувачів з API.
// Link — компонент для створення навігаційних лінків між сторінками.
// SearchBars — це компонент для пошуку користувачів (імпортується з іншого файлу).
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import { Link } from 'react-router-dom';
import SearchBars from '../../components/SearchBars/SearchBars';

const Users = () => {
    // Стан для зберігання списку користувачів.
    const [users, setUsers] = useState([]);
    // Стан для зберігання значення пошукового запиту.
    const [query, setQuery] = useState('');

    // Використовуємо useEffect для завантаження даних про користувачів після того, як компонент був змонтований.
    useEffect(() => {
        // Створюємо асинхронну функцію для отримання користувачів.
        const getData = async () => {
            // Викликаємо функцію fetchUsers для отримання даних про всіх користувачів.
            const data = await fetchUsers();
            // Оновлюємо стан користувачів отриманими даними.
            setUsers(data);
        };
        // Викликаємо getData для завантаження даних.
        getData();
    }, []); // Залежність порожня, тому цей ефект виконується тільки один раз при монтуванні компонента.

    // Фільтруємо користувачів на основі пошукового запиту (query).
    // Використовуємо метод filter для створення нового масиву, що містить лише тих користувачів,
    // чиє ім'я або прізвище містить запит, що вводить користувач.
    const filteredData = users.filter(user => 
        user.firstName.toLowerCase().includes(query.toLowerCase()) || 
        user.lastName.toLowerCase().includes(query.toLowerCase())
    );

    // Функція для оновлення стану query (пошукового запиту).
    const handleSetQuery = (newValue) => {
        // Оновлюємо стан query новим значенням.
        setQuery(newValue);
    };

  return (
      <div>
          {/* Заголовок сторінки */}
          <h1>Users</h1>
          
          {/* Компонент пошукової панелі. */}
          {/* Передаємо handleSetQuery як пропс, щоб компонент SearchBars міг оновлювати стан query. */}
          <SearchBars handleSetQuery={handleSetQuery} />

          {/* Список користувачів, який відображається після фільтрації */}
          {/* Фільтровані дані виводяться в вигляді списку */}
          <ul 
              style={{
                  fontSize: '20px', // Встановлюємо розмір шрифта для списку.
                  height: '300px', // Обмежуємо висоту списку.
                  display: 'flex', // Використовуємо flexbox для стилізації списку.
                  flexWrap: 'wrap', // Дозволяємо елементам переноситися на новий рядок.
                  gap: '10px', // Відстань між елементами списку.
                  flexDirection: 'column' // Направляємо елементи списку вертикально.
              }}>
              {/* Для кожного користувача з фільтрованого списку створюємо елемент списку */}
              {filteredData.map(user => (
                  <li key={user.id}>
                      {/* Використовуємо компонент Link для створення лінка на сторінку конкретного користувача */}
                      <Link to={user.id.toString()}>{user.firstName} {user.lastName}</Link>
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default Users;
