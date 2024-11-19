import React, { useState } from 'react';
import styles from './header.module.css';
import Hamburger from './header_menu_hamburger.png';

export const Header = () => {
    const [activeButton, setActiveButton] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log("click")
    };

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>Vagames</div>
                <div className={styles.buttons}>
                    {["Магазин", "Библиотека", "Корзина", "Войти"].map((label, index) => (
                        <div
                            key={index}
                            className={`${styles.button} ${activeButton === index ? styles.active : ""}`}
                            onClick={() => handleButtonClick(index)}
                        >
                            {label}
                        </div>
                    ))}
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <img src={Hamburger} alt="Menu" />
                </div>
                <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : styles.menuClose}`}>
                    {["Магазин", "Библиотека", "Корзина", "Войти"].map((label, index) => (
                        <div key={index} className={styles.mbutton}>
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
