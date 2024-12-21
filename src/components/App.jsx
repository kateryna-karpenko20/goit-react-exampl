import React, { useEffect, useState } from "react"; 
// Це імпорт бібліотеки React. React – це спеціальна програма, яка допомагає створювати веб-сайти. Тут ми імпортуємо частини React, які нам будуть потрібні (useEffect і useState).
import Header from "./Header/Header";  // Це імпорт компоненти Header (шапка сайту).
import List from "./List/List";  // Це імпорт компоненти List (для створення списків).
import Message from "./Message/Message";  // Це імпорт компоненти Message (для створення повідомлень).
import Modal from "./Modal/Modal";  // Це імпорт компоненти Modal (модальне вікно).
import Section from "./Section/Section";  // Це імпорт компоненти Section (для великих блоків контенту).
import Footer from "./Footer/Footer";  // Це імпорт компоненти Footer (підвал сайту).
import "../index.css";  // Тут ми підключаємо файл CSS, що містить стилі для сторінки.
import 'modern-normalize'  // Це бібліотека, яка допомагає вирівняти стилі на різних браузерах.
import casper from '../assets/casper.jpg'  // Це зображення, яке ми будемо використовувати на нашій сторінці.
import { Counter } from "./Counter/Counter";  // Це імпорт компоненти Counter (лічильник).
import { ColorPicker } from "./ColorPicker/ColorPicker";  // Це імпорт компоненти ColorPicker (вибір кольору).
import { TodoList } from "./TodoList/TodoList";  // Це імпорт компоненти TodoList (список справ).
import Vote from "./Vote/Vote";  // Це імпорт компоненти Vote (для голосування).
import UncontrolledForms from "./Forms/UncontrolledForms";  // Це імпорт форми, яка не контролюється програмно.
import Forms from "./Forms/Forms";  // Це імпорт форми, яка контролюється програмно.
import UserId from "./UserId/UserId";  // Це імпорт компоненти UserId (для відображення користувача за його ID).
import OrderForm from "./OrderForm/OrderForm";  // Це імпорт форми для оформлення замовлення.
import Articles from "./Articles/Articles"  // Це імпорт компоненти Articles (для відображення статей).
import SearchBar from "./SearchBar/SearchBar";  // Це імпорт компоненти SearchBar (для пошуку).
import Loader from "./Loader/Loader";  // Це імпорт компоненти Loader (індикатор завантаження).
import { fetchArticles } from "../services/api";  // Це функція для отримання статей з API.
import { Routes, Route } from "react-router-dom";  // Це імпорти для маршрутизації сторінок у додатку.
import Home from "../pages/Home/Home";  // Це компонента для домашньої сторінки.
import About from "../pages/About/About";  // Це компонента для сторінки "Про нас".
import NotFound from "../pages/NotFound/NotFound";  // Це компонента для сторінки "Не знайдено".
import Team from "./NesterRoutes/Team";  // Це компонента для сторінки "Команда".
import Aim from "./NesterRoutes/Aim";  // Це компонента для сторінки "Мета".
import Job from "./NesterRoutes/Job";  // Це компонента для сторінки "Вакансії".
import Users from "../pages/Users/Users";  // Це компонента для сторінки користувачів.
import UserDetails from "../pages/UserDetails/UserDetails";  // Це компонента для сторінки деталей користувача.
import Posts from "./NesterRoutes/Posts";  // Це компонента для сторінки постів користувачів.

const App = () => {
  // Створюємо компоненту App, яка буде головним елементом нашого сайту.
  
  // const [isOpen, setIsOpen] = useState(false); 
  // useState - це хук для збереження змінної "isOpen", яка визначає, чи відкрито модальне вікно. Спочатку вікно закрите (false).

  // Функція для відкриття модального вікна
  // const openModal = () => setIsOpen(true);  // Встановлюємо isOpen в true, що означає, що модальне вікно буде відкритим.

  // Функція для закриття модального вікна
  // const closeModal = () => setIsOpen(false);  // Встановлюємо isOpen в false, що означає, що модальне вікно буде закритим.

  const isOnline = false;  // Створюємо змінну isOnline, яка позначає, чи ми зараз в Інтернеті (false означає, що немає підключення).
  const age = 20;  // Вік користувача (в даному випадку 20 років).

  // Дані для фільмів та товарів, які ми хочемо відобразити на сторінці.
  const filmsDate = [
    { id: '1', title: "Terminator" },
    { id: '2', title: "Mr. Bean" }
  ];
  const goodsData = [
    { id: '1', title: "Car" },
    { id: '2', title: "Hat" },
    { id: '3', title: "Book" }
  ];

  // Стани для статей та їх завантаження.
  const [articles, setArticles] = useState([]);  // Створюємо змінну articles для зберігання статей.
  const [isLoading, setIsLoading] = useState(false);  // Змінна, яка визначає, чи статті ще завантажуються.
  const [isError, setIsError] = useState(false);  // Змінна, яка визначає, чи сталася помилка при завантаженні.
  const [query, setQuery] = useState('react');  // Початковий запит для пошуку статей (наприклад, статті про React).
  const [page, setPage] = useState(0);  // Змінна для пагінації (номер сторінки).

  // useEffect викликається після рендеру компоненти. Це використовується для виконання асинхронних операцій, таких як запити до API.
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);  // Встановлюємо isLoading в true, щоб показати, що дані завантажуються.
        setIsError(false);  // Встановлюємо isError в false, бо спочатку ми не маємо помилок.
        
        // Отримуємо статті з API за допомогою функції fetchArticles.
        const { hits } = await fetchArticles(query, page);

        // Оновлюємо стан статей, додаючи нові статті або замінюючи старі в залежності від сторінки.
        setArticles(prev => (page === 0 ? hits : [...prev, ...hits]));  // Якщо сторінка 0, замінюємо статті, якщо ні, додаємо нові.
      } catch (error) {
        console.error(error);  // Виводимо помилку в консоль, якщо вона сталася.
        setIsError(true);  // Встановлюємо isError в true, якщо сталася помилка.
      } finally {
        setIsLoading(false);  // Встановлюємо isLoading в false, бо ми закінчили завантаження.
      }
    };
    getData();  // Викликаємо функцію getData, щоб отримати статті.
  }, [query, page]);  // Цей хук спрацьовує при зміні query або page.

  // Функція для зміни запиту пошуку
  const handleChangeQuery = query => {
    setArticles([]);  // Очищаємо список статей.
    setQuery(query);  // Оновлюємо запит для пошуку.
    setPage(0);  // Скидаємо номер сторінки на 0 (початкова сторінка).
  };

  // Функція для завантаження наступних статей (пагінація)
  const handleLoadMore = () => setPage(prevPage => prevPage + 1);  // Збільшуємо номер сторінки на 1.

  return (
    <div>
      <Header />  {/* Відображаємо шапку сайту.*/}
      <img src={casper} alt="casper" width={600} height={400} />  {/* Відображаємо картинку з файлу casper.jpg.*/}
      
      {isOnline && <h1>Welcome back!</h1>}  {/* Якщо ми онлайн (isOnline = true), показуємо привітання.*/}
      
      {isLoading && <h2>Loading...</h2>}  {/* Якщо дані ще завантажуються, показуємо "Loading...".*/}
      
      {age > 18 ? <h3>You are an adult</h3> : <h3>You are a child</h3>}  {/* Якщо користувач старше 18, показуємо повідомлення "You are an adult", якщо ні - "You are a child".*/}

      {/* Виводимо списки фільмів та товарів */}
      <List title='Films' data={filmsDate} />
      <List title='Goods' data={goodsData} />

      {/* Виводимо повідомлення */}
      <Message text='куплю машину' author='Max' />
      <Message text='куплю шапку' author='Ира' />
      <Message text='куплю книгу' author='Вова' />

      {/* Показуємо інші компоненти */}
      <Section />
      <Footer />
      <Counter />
      <ColorPicker />
      <TodoList />

      {/* Пошукова панель для пошуку статей */}
      <SearchBar onChangeQuery={handleChangeQuery} />
      
      {isLoading && <Loader />}  {/* Якщо завантаження, показуємо індикатор.*/}
      
      <Articles articles={articles} />  {/* Виводимо статті.*/}

      {isError && <h2>Щось сталося!Онови сторінку...</h2>}  {/* Якщо сталася помилка, виводимо повідомлення про помилку.*/}
      
      {/* Кнопка для завантаження наступних статей */}
      {!isLoading && !isError && (
        <button onClick={handleLoadMore}>Load More</button>
      )}

      {/* Маршрутизація (навігація між сторінками) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} >
          <Route path="info" element={<UserDetails />} />
          <Route path="posts" element={<Posts />} />
        </Route>
        <Route path="/about" element={<About />} >
          <Route path="team" element={<Team />} />
          <Route path="aim" element={<Aim />} />
          <Route path="job" element={<Job />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Якщо сторінка не знайдена */}
      </Routes>
    </div>
  );
};

export default App;  // Експортуємо компоненту App для використання в інших частинах програми.
