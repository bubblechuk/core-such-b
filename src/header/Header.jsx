import React, { useState } from 'react';
import styles from './header.module.css';
import Hamburger from './header_menu_hamburger.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices';
export const Header = () => {
    const dispatch = useDispatch();
    const [activeButton, setActiveButton] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const accounts = useSelector(state=>state.login.accounts);
    console.log(accounts)
    const account = accounts.filter(elem => elem.isAuthenticated === true)
    console.log(account)
    const buttons = [
        { label: "Магазин", path: "/" },
        { label: "Библиотека", path: "/library" },
        { label: "Корзина", path: "/cart" },
        { label: account.length==0?"Войти":'Выйти', path: "/login" }
    ];

    const handleButtonClick = (index, button) => {
        if (button.label !== "Войти") dispatch(logout());
        setActiveButton(index);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Link to="/"><div className={styles.logo}>Vagames</div></Link>
                <div className={styles.buttons}>
                    {buttons.map((button, index) => {
                        
                        return (
                        <Link to={button.path} key={index}>
                            <div
                                className={`${styles.button} ${activeButton === index ? styles.active : ""}`}
                                onClick={() => handleButtonClick(index, button)}
                            >
                                {button.label}
                            </div>
                        </Link>
                    )})}
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <img src={Hamburger} alt="Menu" />
                </div>
                <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : styles.menuClose}`}>
                    {buttons.map((button, index) => (
                        <Link to={button.path} key={index} onClick={toggleMenu}>
                            <div className={`${styles.mbutton} ${menuOpen ? true : styles.close}`}>
                                {button.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
