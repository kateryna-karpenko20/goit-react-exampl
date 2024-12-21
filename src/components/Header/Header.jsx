import React from "react";  // Імпортуємо React для використання JSX та створення компоненту.
import { NavLink } from "react-router-dom";  // Імпортуємо NavLink для створення навігаційних посилань, які підтримують зміну активного стану.
import css from "./Header.module.css";  // Імпортуємо стилі для компонента з CSS модуля.
import clsx from "clsx";  // Імпортуємо clsx для умовного додавання класів.
import neilImage from "../../assets/Neil.jpg";  // Імпортуємо зображення користувача, яке буде відображатися у хедері.

// Функція для побудови класу для навігаційних посилань, додається клас 'active' для активного посилання
const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);  

const Header = () => {
  return (
    <header className={css.header}>  {/* Заголовок, контейнер для хедера з класом для стилізації */}
      <div>
        <img className={css.img} src={neilImage} alt="Neil" />  {/* Зображення користувача або іконки. */}
      </div>
      <p className={css.title}>Welcome</p>  {/* Привітання на головній сторінці. */}
      <nav className={css.nav}>  {/* Навігаційний блок для посилань */}
        <NavLink className={buildLinkClass} to="/">  {/* Посилання на головну сторінку. */}
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/about">  {/* Посилання на сторінку "Про нас". */}
          About
        </NavLink>
        <NavLink className={buildLinkClass} to="/users">  {/* Посилання на сторінку користувачів. */}
          Users
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;  // Експортуємо компонент для використання в інших частинах програми.

