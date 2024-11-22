import React, { useState } from 'react';
import styles from './page.module.css';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, delFromCart } from '../redux/slices'; 
import { useNavigate } from 'react-router';
export const Page = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const searchParams = new URLSearchParams(location.search);
    const list = useSelector(state => state.login.games);
    const accounts = useSelector(state => state.login.accounts);
    const account = accounts.find((acc) => acc.isAuthenticated);
    const games = useSelector(state => state.login.games);
    const cart = account?.cart || []; 
    const library = account?.library || [];
    const game = list.filter(elem => elem.title === searchParams.get('game'))[0];
    const recommended = games.filter(elem => elem.genre === game.genre && elem.title !== game.title);
    const [mainImage, setMainImage] = useState(game.images.media[0]);
    const navigate = useNavigate();
    const isInCart = cart.some(item => item.title === game.title); 
    const isInLibrary = library.some(item => item.title === game.title); 

    const handleCartClick = () => {
        if (isInCart) {
            dispatch(delFromCart(game.title));
        } else {
            dispatch(addToCart(game)); 
        }
    };

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    return (
        <div className={styles.container}>
            <div className={styles.page}>
                <p className={styles.title}>{game.title}</p>
                <div className={styles.main}>
                    <div className={styles.images}>
                        <img className={styles.mimage} src={mainImage} alt="Main" />
                        <div className={styles.miniatures}>
                            {game.images.media.map((elem, index) => (
                                <img
                                    key={index}
                                    className={styles.mini}
                                    src={elem}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => handleThumbnailClick(elem)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.desc}>
                        <img className={styles.thumbnail} src={game.images.smallimg} alt="Thumbnail" />
                        <div className={styles.sdesc}>{game.desc}</div>
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
                        {isInLibrary?<div>
                            <button className={styles.pbutton}>Играть!</button>
                        </div>:false}
                    </div>
                </div>
                <div className={styles.secondary}>
                    <div className={styles.left}>
                        <div className={styles.buy}>
                            <span className={styles.gtitle}>Купить {game.title}</span>
                            <div className={styles.bbutton}>
                                <div className={styles.price}>{game.price} BYN</div>
                                <button
                                    onClick={handleCartClick}
                                    className={isInLibrary?styles.lbutton:styles.cbutton}
                                    disabled={isInLibrary} 
                                >
                                    {isInLibrary
                                        ? "В библиотеке"
                                        : isInCart
                                            ? "Удалить из корзины"
                                            : "В корзину"}
                                </button>
                            </div>
                        </div>
                        <div className={styles.bdesc}>
                            <p className={styles.btitle}>Про эту игру:</p>
                            <div className={styles.bbdesc}>{game.bigdesc}</div>
                            <p className={styles.btitle} style={{ marginBottom: 0 }}>Системные требования</p>
                            <div className={styles.req}>
                                <div className={styles.reqwin}>
                                    <p>Минимальные:</p>
                                    ОС: {game.req.min.os}<br />
                                    Процессор: {game.req.min.cpu}<br />
                                    ОЗУ: {game.req.min.ram}<br />
                                    Видеокарта: {game.req.min.gpu}<br />
                                    Место на диске: {game.req.min.space}<br />
                                </div>
                                <div className={styles.reqwin}>
                                    <p>Рекомендуемые:</p>
                                    ОС: {game.req.rec.os}<br />
                                    Процессор: {game.req.rec.cpu}<br />
                                    ОЗУ: {game.req.rec.ram}<br />
                                    Видеокарта: {game.req.rec.gpu}<br />
                                    Место на диске: {game.req.rec.space}<br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.recommend}>
                            <p className={styles.rtitle}>Также вас заинтересует</p>
                            <div className={styles.items}>
                                {recommended.map((elem => {
                                    return (
                                        <div className={styles.recitem} onClick={() => {navigate(`/page?game=${elem.title}`)}}>
                                    <img className={styles.rimage} alt="Recommendation" src={elem.images.smallimg} />
                                    <div className={styles.rprice}>{elem.price} BYN</div>
                                </div>
                                    )
                                }))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
