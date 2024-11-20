import styles from './library.module.css'
export const Library = () => {
    return (
        <div className={styles.container}>
        <div className={styles.library}>
            <p className={styles.title}>Библиотека</p>
            <div className={styles.content}>
            <div className={styles.game}></div>
            <div className={styles.game}></div>
            <div className={styles.game}></div>
            <div className={styles.game}></div>
            <div className={styles.game}></div>
            <div className={styles.game}></div>
            <div className={styles.game}></div>
            <div className={styles.game}></div>
            <div className={styles.game}></div>
            <div className={styles.game}></div>
            </div>
        </div>
        </div>
    )
}