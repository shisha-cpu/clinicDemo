import styles from './header.module.css'
import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <header>
            <div className={styles.logo}>
            <img src="./img/logo.png" alt="logo" style={{width: '200px'}} />

            </div>
            <div className={styles.navBar}>
                <Link to={'/'}> Главная </Link>
                <Link to={'/about'}> О нас </Link>
                <Link to={'/blog'}> Блог </Link>
                <Link to={'/contact'}> Контакты </Link>
  
            </div>
            <div className={styles.headeeContact}>
                <h2>+77072441717</h2>
                <button>Получить консультацию </button>
            </div>
        </header>
    )
  }