import styles from './Detalles.module.css';

function Detalles() {
    return (
        <section className={styles.detalles}>
            <h1>Nombre</h1>
            <img src="https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg" alt="Nombre" />

            <p>Altura aprox.: <span>9 - 11.5 KG</span></p>

            <p>Peso aprox.: <span>6 - 13 KG</span></p>

            <p>Esperanza de vida: <span>10 - 12 years</span></p>
            <h4>Temperamentos</h4>

            <ul>
                <li>temperametos #1</li>
                <li>temperametos #2</li>
                <li>temperametos #3</li>
                <li>temperametos #4</li>
            </ul>

        </section>
    )
}

export default Detalles;