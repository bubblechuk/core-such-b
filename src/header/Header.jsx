import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices';
import styles from './header.module.css';
import logo from './logo.jpg';
import Hamburger from './header_menu_hamburger.png';

export const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation(); 
    const [menuOpen, setMenuOpen] = useState(false);
    const accounts = useSelector(state => state.login.accounts);
    const account = accounts.find(elem => elem.isAuthenticated === true);

    const buttons = [
        { label: "Магазин", path: "/" },
        { label: "Библиотека", path: "/library" },
        { label: "Корзина", path: "/cart" },
        { label: account ? 'Выйти' : "Войти", path: "/login" }
    ];

    const activeIndex = buttons.findIndex(button => button.path === location.pathname);

    const handleButtonClick = (button) => {
        if (button.label === "Выйти") dispatch(logout());
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Link to="/">
                    <div className={styles.logo}>
                        <img className={styles.logoimage} src={logo} alt="Логотип" />
                        Vagames
                    </div>
                </Link>
                <div className={styles.buttons}>
                    {buttons.map((button, index) => (
                        <Link to={button.path} key={index}>
                            <div
                                className={`${styles.button} ${activeIndex === index ? styles.active : ""}`}
                                onClick={() => handleButtonClick(button)}
                            >
                                {button.label}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <img src={Hamburger} alt="Меню" />
                </div>
                <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : styles.menuClose}`}>
                    {buttons.map((button, index) => (
                        <Link to={button.path} key={index} onClick={toggleMenu}>
                            <div className={`${styles.mbutton} ${activeIndex === index ? styles.active : ""}`}>
                                {button.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
