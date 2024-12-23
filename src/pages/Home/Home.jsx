// Імпортуємо React та хук useEffect з бібліотеки React.
import React, { useEffect } from 'react';  // React необхідний для створення компонента, useEffect використовується для виконання побічних ефектів.

// Оголошуємо компонент Home, який буде відображатися на головній сторінці.
const Home = () => {

  // Використовуємо хук useEffect для виконання певної дії після того, як компонент був відрендерений.
  useEffect(() => {
    // Цей код змінює заголовок вкладки в браузері, коли користувач знаходиться на головній сторінці.
    document.title = "Best coders | Home";
  });

  // JSX розмітка, яка буде відображатися на екрані.
  return (
    <div>Home</div>  // На екрані відобразиться просто текст "Home" у контейнері <div>.
  );
}

// Експортуємо компонент, щоб він міг бути використаний в інших частинах нашого додатку.
export default Home;
