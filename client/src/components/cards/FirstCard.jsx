import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom'

function FirstCard({ id, nombre, imagen, peso }) {
    const navigate = useNavigate()

    const goToDetail = () => { navigate(`/detalle/${id}`) }

    return (
        <section className={styles.card} onClick={goToDetail}>
            <div className={styles.front}>
                <img src={imagen} alt={nombre} />
            </div>
            <div className={styles.back}>
                <h2>{nombre}</h2>
                <ul>
                    <li>alegre</li>
                    <li>cariñoso</li>
                    <li>jugeueton</li>
                </ul>
                <p>peso aprox: {peso} </p>
            </div>
        </section>
    )
}

export default FirstCard;