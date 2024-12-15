import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
import neilImage from "../../assets/Neil.jpg";
const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Header = () => {
  return (
    <header className={css.header}>
      <div>
              <img className={css.img} src={neilImage} alt="Neil" />
      </div>
      <p className={css.title}>Welcome</p>
      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
