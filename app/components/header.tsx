import styles from '../scss/header.module.scss'
import { useSelector } from 'react-redux'
import { selectCount } from '../store/slice';

export default function Header() {
    const currentState = useSelector(selectCount);

    return (
        <header className={styles.header}>
            <div className={styles['header__content']}>
                <p>{currentState}</p>
            </div>
        </header>
    )
}
