import React from 'react';  // Імпортуємо React для створення компонента.
import { Rings } from "react-loader-spinner";  // Імпортуємо компонент 'Rings' з бібліотеки react-loader-spinner для відображення анімації завантаження.

const Loader = () => {  // Оголошуємо функціональний компонент Loader.
  return (
    <div>  {/* Контейнер для компонента Loader */}
       <Rings color="#00BFFF" height={80} width={80} />  
       {/* Виводимо анімацію завантаження 'Rings'. 
            - color="#00BFFF": задає колір анімації (відтінок синього).
            - height={80}, width={80}: задають розміри анімації (80x80 пікселів). */}
    </div>
  );
};

export default Loader;  // Експортуємо компонент Loader для використання в інших частинах програми.
