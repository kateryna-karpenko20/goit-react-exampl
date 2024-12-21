import React, { useEffect, useState } from 'react';  // Імпортуємо React, useEffect та useState для керування станом та виконання побічних ефектів.
import { useParams } from 'react-router-dom';  // Імпортуємо useParams для отримання параметрів з URL (наприклад, userId).
import { fetchPostByUserId } from '../../services/api';  // Імпортуємо функцію fetchPostByUserId для отримання постів від API за userId.

const Posts = () => {
  const { userId } = useParams();  // Отримуємо userId з параметрів URL.
  const [posts, setPosts] = useState([]);  // Стан для зберігання списку постів.
  const [isLoading, setIsLoading] = useState(false);  // Стан для відображення індикатора завантаження.
  const [isError, setIsError] = useState(false);  // Стан для обробки помилок при завантаженні даних.

  // useEffect виконується кожен раз, коли змінюється userId (це може статися при зміні URL).
  useEffect(() => {
    const getData = async () => {  // Оголошуємо асинхронну функцію для отримання постів.
      setIsLoading(true);  // Встановлюємо стан isLoading в true, щоб показати індикатор завантаження.
      setIsError(false);  // Очищаємо стан помилки, щоб не показувати попередні помилки.

      try {
        const data = await fetchPostByUserId(userId);  // Викликаємо функцію fetchPostByUserId для отримання даних.
        setPosts(data);  // Оновлюємо стан posts з отриманими даними.
      } catch (error) {
        console.error('Error fetching posts:', error);  // Логування помилки, якщо вона виникла.
        setIsError(true);  // Встановлюємо стан isError в true, щоб показати повідомлення про помилку.
      } finally {
        setIsLoading(false);  // Завершуємо завантаження, навіть якщо сталася помилка.
      }
    };

    getData();  // Викликаємо асинхронну функцію для отримання даних.

  }, [userId]);  // useEffect залежить від userId, тому при його зміні запуститься знову.

  // Рендеринг в залежності від стану:
  if (isLoading) return <p>Loading...</p>;  // Якщо йде завантаження, показуємо індикатор завантаження.
  if (isError) return <p>Error loading posts. Please try again.</p>;  // Якщо сталася помилка, показуємо повідомлення про помилку.
  if (posts.length === 0) return <p>No posts found for this user.</p>;  // Якщо пости порожні, показуємо повідомлення про відсутність постів.

  return (
    <div>
      <h2>Posts by User {userId}</h2>  {/* Заголовок, що показує id користувача */}
      <ul>
        {posts.map(post => (  // Перебираємо список постів і рендеримо кожен пост.
          <li key={post.id}>{post.title}</li>  // Виводимо заголовок кожного поста.
        ))}
      </ul>
    </div>
  );
};

export default Posts;  // Експортуємо компонент Posts для використання в інших частинах програми.
