import styles from './Card.module.css';

function FirstCard() {
    return (
        <section className={styles.card}>
            <div class={styles.front}>
                <img src="https://cdn2.thedogapi.com/images/B1ADQg94X.jpg" alt="Nombre de la raza" />
            </div>
            <div class={styles.back}>
                <h2>Nombre del dog</h2>
                <ul>
                    <li>alegre</li>
                    <li>cariñoso</li>
                    <li>jugeueton</li>
                </ul>
                <p>peso aprox: 115kg </p>
            </div>
        </section>
    )
}

export default FirstCard;