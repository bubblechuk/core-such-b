import { useDispatch, useSelector } from 'react-redux'
import styles from './cart.module.css'
import { useNavigate } from 'react-router';
import { delFromCart, buyCart, wipeCart } from '../redux/slices';
export const Cart = () => {
    const clickHandler = () => {
        navigate("/")
    }
    const list = useSelector(state => state.login.accounts).filter(elem => elem.isAuthenticated === true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(list)
    console.log(list.length)
    return (
        <div className={styles.container}>
        <div className={styles.cart}>
            <p className={styles.title}>Ваша корзина</p>
            <div className={styles.window}>
            <div className={styles.goods}>
                {list.length > 0 && list[0].cart.length > 0 ? list[0].cart.map((elem) => {
                    return (
                        <div className={styles.good}>
                        <img className={styles.img} src={elem.images.smallimg}/>
                        <div className={styles.desc}>
                        <div className={styles.gtitle}>{elem.title}</div>
                        <div className={styles.platform}>Windows</div>
                        <div className={styles.price}>{elem.price + ' BYN'}</div>
                        <div className={styles.pwindow}>
                        <button className={styles.button} onClick={() => {dispatch(delFromCart(elem.title))}}>Удалить</button>
                        </div>
                        </div>
                    </div>
                    )
                }) : <div className={styles.empty}>
                        <p className={styles.title} style={{textAlign: "center", padding: 0}}>Корзина пуста!</p>
                        <button className={styles.button} onClick={clickHandler}>Вернуться на главную</button>
                    </div>}


            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => {navigate("/")}}>Продолжить покупки</button>
                <button className={styles.button} onClick={() => {dispatch(wipeCart())}}>Удалить все</button>
            </div>
            </div>
            <div className={styles.check}>
            <div className={styles.checkout}>
            <div className={styles.total}>
                <div>Итого: </div>
                <div>{list.length > 0
    ? list[0].cart.reduce((total, item) => total + parseFloat(item.price), 0)
    : 0} BYN</div>
            </div>
            <div className={styles.agree}>Нажимая кнопку оплатить вы соглашаетесь с нашими условиями оплаты</div>
            <button className={styles.pbutton} onClick={() => {dispatch(buyCart())}}>Оплатить</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}