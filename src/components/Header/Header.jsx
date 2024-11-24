import css from "./Header.module.css";
import clsx from "clsx";


const Header = () => {
    return (
        <header className="header">
            <div>Logo</div>
            <p className={css.title}>Header</p>
            {/* <p className={`${css.secondTitle} ${css.title}`}>Second title</p> */}
            <p className={clsx (css.title, css.secondTitle)}>Second title</p>
            <nav className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;