import axios from "axios";

// axios.defaults.baseURL = `https://dummyjson.com`;

export const fetchArticles = async (query, page) => {
  const response = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
  );
  return response.data;
};

export const fetchUsers = async () => { // Додано `()`
  const { data } = await axios.get(`https://dummyjson.com/users`);
  return data.users; // Повертає масив користувачів
};

export const fetchUsersById = async id => { // Додано `()`
  const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
  return data; // Повертає об'єкт користувача
};

export const fetchPostByUserId = async id => { 
  const { data } = await axios.get(`https://dummyjson.com/posts/user/${id}`);
  return data.posts; // Повертає масив постів користувача
};
