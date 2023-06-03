import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <section className={styles.redes}>
                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">&diams;</a>
                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">&spades;</a>
                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">&clubs;</a>
                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">&hearts;</a>
            </section>
            <hr />
            <section className={styles.sobre}>
                <h2>PI-DOGS</h2>
                <p>&copy; Todos los derechos reservados.</p>

                <Link to={'/'}>Informacion legal</Link>
                <Link to={'/'}>Politica de privacidad</Link>
                <Link to={'/'}>Cookies</Link>
                <Link to={'/'}>Sobre nosotros</Link>

            </section>
        </footer>
    )
}

export default Footer;