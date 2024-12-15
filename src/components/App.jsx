import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import Message from "./Message/Message";
import Modal from "./Modal/Modal";
import Section from "./Section/Section";
import Footer from "./Footer/Footer"; 
import "../index.css";
import 'modern-normalize'
import casper from '../assets/casper.jpg'
import { Counter } from "./Counter/Counter";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import { TodoList } from "./TodoList/TodoList";
import Vote from "./Vote/Vote";
import UncontrolledForms from "./Forms/UncontrolledForms";
import Forms from "./Forms/Forms";
import UserId from "./UserId/UserId";
import OrderForm from "./OrderForm/OrderForm";
// import { fetchModule } from "../api";
import Articles from "./Articles/Articles"
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import { fetchArticles } from "../services/api";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import Team from "./NesterRoutes/Team";
import Aim from "./NesterRoutes/Aim";
import Job from "./NesterRoutes/Job";
import Users from "../pages/Users/Users";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Функції для відкриття та закриття модального вікна
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const isOnline = false;
  // const isLoading = false;
  const age = 20;
  const filmsDate = [
    {
      id: '1',
      title: "Terminator",
    },
    {
      id: '2',
      title: "Mr. Bean",
    },
  ];
  const goodsData = [
    {
      id: '1',
      title: "Car",
    },
    {
      id: '2',
      title: "Hat",
    },
    {
      id: '3',
      title: "Book",
    },
  ];

 
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [query, setQuery] = useState('react');
    const [page, setPage] = useState(0);

    useEffect(() => {
      const getData = async () => {
        try {
          setIsLoading(true);
          setIsError(false);
          const { hits } = await fetchArticles(query, page);
          setArticles(prev => (page === 0 ? hits : [...prev, ...hits]));
        } catch (error) {
          console.error(error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
      getData();
    }, [query, page]);

    const handleChangeQuery = query => {
      setArticles([]);
      setQuery(query);
      setPage(0); // Reset to first page when query changes
    };

    const handleLoadMore = () => setPage(prevPage => prevPage + 1);
  
    return (
      <div>
        <Header />
        {/* <Modal title="children">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus iusto earum voluptatum at deserunt cum vitae, autem quod molestiae eum excepturi ducimus odit tenetur ipsum, tempore porro temporibus nam!</p>
        <button>click</button>
      </Modal>
      <Modal title="login">
        <input type="number" />
        <input type="password" />
        <button>click</button>
      </Modal> */}
        {/* Зображення та умовний контент */}
        <img src={casper} alt="casper" width={600} height={400} />
        {isOnline && <h1>Welcome back!</h1>}
        {isLoading && <h2>Loading...</h2>}
        {age > 18 ? <h3>You are an adult</h3> : <h3>You are a child</h3>}

        {/* Списки */}
        <List title='Films' data={filmsDate} />
        <List title='Goods' data={goodsData} />

        {/* Повідомлення */}
        <Message text='куплю машину' author='Max' />
        <Message text='куплю шапку' author='Ира' />
        <Message text='куплю книгу' author='Вова' />

        <Section />
        <Footer />

        {/* Заняття */}
        <h2>Заняття 2</h2>
        <Counter />
        <ColorPicker />
        <TodoList />

        <h2>Заняття 2-2</h2>
        <Counter />

        {/* Кнопка для відкриття модального вікна */}
        <button onClick={openModal}>Open Modal</button>

        {/* Модальне вікно відображається, якщо isOpen === true */}
        {isOpen && (
          <Modal onClose={closeModal}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sapiente unde dolorum voluptate expedita debitis recusandae, incidunt iure repudiandae cumque neque doloremque magni culpa illum quod earum repellendus voluptatum veniam!
          </Modal>
        )}
        {/* <TodoList /> */}
        <Vote />
        <h2>Заняття 3</h2>
        < UncontrolledForms />
        <Forms />
        <UserId />
        <h2>Заняття 4 Formik</h2>
        <OrderForm />
        <div>
          <SearchBar onChangeQuery={handleChangeQuery} />
          {isLoading && <Loader />}
          <Articles articles={articles} />
          {isError && <h2>Щось сталося!Онови сторінку...</h2>}
          {!isLoading && !isError && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
        </div>
        <h2>Заняття 4-2 useMemo i useRef</h2>
        <Counter />
        <h2>Заняття 5-1 Router</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} >
            <Route path="team" element={<Team />} />
            <Route path="aim" element={<Aim />} />
            <Route path="job" element={<Job />} />
          </Route>
          <Route path="*" element={<NotFound />} /> {/* якщо не існує сторінки чи посилання */}
        </Routes>
      </div>
    );
  };


export default App;
