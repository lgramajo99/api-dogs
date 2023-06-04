import FirstCard from '../cards/FirstCard';
import styles from './ListCard.module.css';
import { fetchDogs } from '../../redux/actions/dogs.action';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function ListCard() {
    const dispatch = useDispatch();
    const { loading, error, dogs } = useSelector(state => state.dogsReducer);

    useEffect(() => {
        dispatch(fetchDogs())
    }, [dispatch])

    console.log(dogs)

    if (loading) { return (<h1>CARGANDO...</h1>) }
    if (error) { return (<h1>ERROR: </h1>) }

    return (
        <section className={styles.listcard} >

            {dogs.map(({ id, nombre, imagen, peso }) =>
                <FirstCard key={id} id={id} nombre={nombre} imagen={imagen} peso={peso} />
            )}

        </section >
    )
}

export default ListCard;