import styles from './cart.module.css'
export const Cart = () => {
    return (
        <div className={styles.container}>
        <div className={styles.cart}>
            <p className={styles.title}>Ваша корзина</p>
            <div className={styles.window}>
            <div className={styles.goods}>
            <div className={styles.good}>
                <img className={styles.img}/>
                <div className={styles.desc}>
                <div className={styles.gtitle}>Игра</div>
                <div className={styles.platform}>Windows</div>
                <div className={styles.price}>10$</div>
                <div className={styles.pwindow}>
                <button className={styles.button}>Удалить</button>
                </div>
                </div>
            </div>
            <div className={styles.good}>
                <img className={styles.img}/>
                <div className={styles.desc}>
                <div className={styles.gtitle}>Игра</div>
                <div className={styles.platform}>Windows</div>
                <div className={styles.price}>10$</div>
                <div className={styles.pwindow}>
                <button className={styles.button}>Удалить</button>
                </div>
                </div>
            </div>
            <div className={styles.good}>
                <img className={styles.img}/>
                <div className={styles.desc}>
                <div className={styles.gtitle}>Игра</div>
                <div className={styles.platform}>Windows</div>
                <div className={styles.price}>10$</div>
                <div className={styles.pwindow}>
                <button className={styles.button}>Удалить</button>
                </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}>Продолжить покупки</button>
                <button className={styles.button}>Удалить все</button>
            </div>
            </div>
            <div className={styles.check}>
            <div className={styles.checkout}>
            <div className={styles.total}>
                <div>Итого: </div>
                <div>19$</div>
            </div>
            <div className={styles.agree}>Нажимая кнопку оплатить вы соглашаетесь с нашими условиями оплаты</div>
            <button className={styles.pbutton}>Оплатить</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}