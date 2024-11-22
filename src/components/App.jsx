import Header from "./Header/Header";
import List from "./List/List";
import Message from "./Message/Message";

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

      {isOnline && <h1>Welcome back!</h1>}
      {isLoading && <h2>Loading...</h2>}
      {age > 18 ? <h3>You are an adult</h3> : <h3>You are a child</h3>}
      <List title='Films'  data={filmsDate} />
      <List title='Goods' data={goodsData} />
      <Message text='куплю машину' author='Max' />
      <Message text='куплю шапку' author='Ира' />
      <Message text='куплю книгу' author='Вова' />
    </div>
  );
};

export default App;