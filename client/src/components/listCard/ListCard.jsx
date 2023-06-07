import FirstCard from '../cards/FirstCard';
import styles from './ListCard.module.css';
import { fetchDogs } from '../../redux/actions/dogs.action';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../pagination/Pagination';
import Order from '../order/Order';
import Filter from '../filter/Filter';

function ListCard() {
    const dispatch = useDispatch();
    const { loading, error, dogs } = useSelector(state => state.dogsReducer);

    useEffect(() => {
        dispatch(fetchDogs())
    }, [dispatch])

    if (loading) { return (<h1>CARGANDO...</h1>) }
    if (error) { return (<h1>ERROR: {error.message}</h1>) }

    return (
        <section className={styles.listcard} >
            <div className={styles.barras}>
                <Order />
                <Filter />
            </div>

            {dogs?.map(({ id, nombre, imagen, peso, temperaments }) =>
                <FirstCard
                    key={id}
                    id={id}
                    nombre={nombre}
                    imagen={imagen}
                    peso={peso}
                    temperaments={temperaments} />
            )}

            <Pagination />
        </section >
    )
}

export default ListCard;