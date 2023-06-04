import FirstCard from '../cards/FirstCard';
import styles from './ListCard.module.css';



function ListCard() {

    return (
        <section className={styles.listcard} >
            <FirstCard />
            <FirstCard />
            <FirstCard />
            <FirstCard />
        </section >
    )
}

export default ListCard;