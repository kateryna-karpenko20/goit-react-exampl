// Імпортуємо бібліотеку axios для здійснення HTTP-запитів.
import axios from "axios";

// axios.defaults.baseURL = `https://dummyjson.com`;
// Тут можна було б встановити базову URL для всіх запитів, щоб не вказувати її кожен раз вручну.


// axios.defaults.baseURL = `https://dummyjson.com`;

export const fetchArticles = async (query, page) => {
  // Виконуємо асинхронний запит до API для отримання статей.
  const response = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
  );
  // Повертаємо дані з відповіді API.
  return response.data;
};

export const fetchUsers = async () => {
  // Виконуємо асинхронний запит до API для отримання списку користувачів (до 100).
  const { data } = await axios.get(`https://dummyjson.com/users?limit=100`);
  // Повертаємо масив користувачів з отриманих даних.
  return data.users;
};


export const fetchUsersById = async id => {
  // Виконуємо запит для отримання інформації про конкретного користувача за його ID.
  const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
  // Повертаємо об'єкт користувача.
  return data;
};


export const fetchPostByUserId = async id => {
  // Виконуємо запит для отримання постів користувача за його ID.
  const { data } = await axios.get(`https://dummyjson.com/posts/user/${id}`);
  // Повертаємо масив постів користувача.
  return data.posts;
};
