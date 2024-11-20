import styles from './page.module.css'
export const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.page}>
                <p className={styles.title}>Game Name</p>
                <div className={styles.main}>
                    <div className={styles.images}>
                        <img className={styles.mimage}/>
                        <div className={styles.miniatures}>
                            <div className={styles.mini}></div>
                            <div className={styles.mini}></div>
                            <div className={styles.mini}></div>
                            <div className={styles.mini}></div>
                            <div className={styles.mini}></div>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        <img className={styles.thumbnail}/>
                        <div className={styles.sdesc}>
                        Discover the vast Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts. Unveil your own epic story as you make your way to the Heart of Chornobyl. Make your choices wisely, as they will determine your fate in the end. 
                        </div>
                        <div className={styles.info}>
                        <div className={styles.def}>
                                <div className={styles.var}>Дата выхода:</div>
                                <div className={styles.value}>20 ноября 2024</div>
                            </div>
                            <div className={styles.def}>
                                <div className={styles.var}>Рейтинг:</div>
                                <div className={styles.value}>77</div>
                            </div>
                            <div className={styles.def}>
                                <div className={styles.var}>Разработчик:</div>
                                <div className={styles.value}>GSC Game World</div>
                            </div>
                            <div className={styles.def}>
                                <div className={styles.var}>Издатель:</div>
                                <div className={styles.value}>GSC Game World</div>
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
                            <button className={styles.cbutton}>В корзину</button>
                        </div>
                    </div>
                    <div className={styles.bdesc}>
                        <p className={styles.btitle}>Про эту игру:</p>
                        <div className={styles.bbdesc}>
                        NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.

Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.
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
                                100 BYN
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