import { useSelector } from 'react-redux'
import styles from './library.module.css'
export const Library = () => {
    const accounts = useSelector(state => state.login.accounts);
    const filtered = accounts.filter(elem => elem.isAuthenticated === true);
    console.log(filtered)
    return (
        <div className={styles.container}>
        <div className={styles.library}>
            <p className={styles.title}>Библиотека</p>
            <div className={styles.content}>
                {filtered.length > 0 ? filtered[0].library.map((elem)=>{
                    return (
                        <div className={styles.game}>
                            <img className={styles.gameimg} src={elem.image}/>
                        </div>
                    )
                }) : <div className={styles.empty}>Ваша библиотека пуста!</div>}
            </div>
        </div>
        </div>
    )
}