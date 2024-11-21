import styles from './page.module.css'
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices';
export const Page = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const searchParams = new URLSearchParams(location.search);
    const list = useSelector(state => state.login.games)
    const game = list.filter(elem => 
        elem.title === searchParams.get('game'))[0]
    const buyHandler = () => {
        dispatch(addToCart(game))
    }
    return (
        <div className={styles.container}>
            <div className={styles.page}>
                <p className={styles.title}>{game.title}</p>
                <div className={styles.main}>
                    <div className={styles.images} src={game.bigimg}>
                        <img className={styles.mimage} src={game.smallimg}/>
                        <div className={styles.miniatures}>
                            {game.images.media.map((elem) => {
                                return (
                                    <img className={styles.mini} src={elem}/>
                                )
                            })}

                        </div>
                    </div>
                    <div className={styles.desc}>
                        <img className={styles.thumbnail}/>
                        <div className={styles.sdesc}>
                        {game.desc}
                        </div>
                        <div className={styles.info}>
                        <div className={styles.def}>
                                <div className={styles.var}>Дата выхода:</div>
                                <div className={styles.value}>{game.info.date}</div>
                            </div>
                            <div className={styles.def}>
                                <div className={styles.var}>Рейтинг:</div>
                                <div className={styles.value}>{game.info.rating}</div>
                            </div>
                            <div className={styles.def}>
                                <div className={styles.var}>Разработчик:</div>
                                <div className={styles.value}>{game.info.developer}</div>
                            </div>
                            <div className={styles.def}>
                                <div className={styles.var}>Издатель:</div>
                                <div className={styles.value}>{game.info.publisher}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <div className={styles.left}>
                    <div className={styles.buy}>
                        <span className={styles.gtitle}>Купить GameName</span>
                        <div className={styles.bbutton}>
                            <div className={styles.price}>100 BYN</div>
                            <button onClick={buyHandler} className={styles.cbutton}>В корзину</button>
                        </div>
                    </div>
                    <div className={styles.bdesc}>
                        <p className={styles.btitle}>Про эту игру:</p>
                        <div className={styles.bbdesc}>
                            {game.bigdesc}
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.recommend}>
                        <p className={styles.rtitle}>Также вас заинтересует</p>
                        <div className={styles.items}>
                        <div className={styles.recitem}>
                            <img className={styles.rimage}/>
                            <div className={styles.rprice}>
                            {game.price + ' BYN'}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}