import Header from "./Header/Header";
import List from "./List/List";
import Message from "./Message/Message";
import Modal from "./Modal/Modal";
import Section from "./Section/Section";
import Footer from "./Footer/Footer"; 
import "../index.css";
import clsx from "clsx";
import 'modern-normalize'
import casper from '../assets/casper.jpg'
import { Counter } from "./Counter/Counter";
import {ColorPicker} from "./ColorPicker/ColorPicker";
import { TodoList } from "./TodoList/TodoList";
const App = () => {
  const isOnline = false;
  const isLoading = false;
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

  return (
    <div>
      <Header />
      <Modal title="children">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus iusto earum voluptatum at deserunt cum vitae, autem quod molestiae eum excepturi ducimus odit tenetur ipsum, tempore porro temporibus nam!</p>
        <button>click</button>
      </Modal>
      <Modal title="login">
        <input type="number" />
        <input type="password" />
        <button>click</button>
      </Modal>
      <img src={casper} alt="casper" width={600} height={400}/>
      {isOnline && <h1>Welcome back!</h1>}
      {isLoading && <h2>Loading...</h2>}
      {age > 18 ? <h3>You are an adult</h3> : <h3>You are a child</h3>}
      <List title='Films'  data={filmsDate} />
      <List title='Goods' data={goodsData} />
      <Message text='куплю машину' author='Max' />
      <Message text='куплю шапку' author='Ира' />
      <Message text='куплю книгу' author='Вова' />
      <Section />
      <Footer />
      <h2>Заняття 2</h2>
      <Counter />
      <ColorPicker />
      <TodoList />
    </div>
  );
};

export default App;