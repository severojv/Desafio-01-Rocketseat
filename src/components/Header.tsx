import logoIg from '../assets/rocket.svg';
import styles from './Header.module.css';
export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoIg} alt="logo do rocket" />
            <div className={styles.wrapper}>

                <span className={styles.color1}>
                    <p><strong> to</strong></p>
                </span><span className={styles.color2}>
                    <p><strong> do</strong></p>

                </span>
            </div>
        </header>
    )
}