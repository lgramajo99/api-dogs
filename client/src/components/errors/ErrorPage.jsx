import styles from './Error.module.css';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    const goHome = () => {
        navigate('/inicio')
    }

    return (
        <section className={styles.errorpage}>
            <div>
                <h1>Lo sentimos, esta pagina está en reparaciones, vuelva pronto</h1>
                <img className={styles.errorImg} src="https://imgur.com/grZhPCu.png" alt="Error page" />
            </div>
            <div className={styles.botoneras}>
                <button onClick={goBack}>Volver atras</button>
                <button onClick={goHome}>Volver al inicio</button>
            </div>

        </section>
    )
}

export default ErrorPage;