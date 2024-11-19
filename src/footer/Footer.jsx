import styles from './footer.module.css'
export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span>
                © Vagames Corporation. Все права защищены. Все торговые марки принадлежат их обладателям.
                </span>
                <br/>
                <span>
                    Политика конфиденциальности | Условия соглашения
                </span>
            </div>
        </div>
    )
}