import Aside from '../aside/Aside';
import ListCard from '../listCard/ListCard';
import styles from './Inicio.module.css';

function Inicio() {
    return (
        <section className={styles.inicio}>
            <Aside />
            <ListCard />
        </section>
    )
}

export default Inicio;