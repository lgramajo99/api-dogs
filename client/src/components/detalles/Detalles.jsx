import { useEffect } from 'react';
import styles from './Detalles.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogId } from '../../redux/actions/dogsId.action';

function Detalles() {
    const { idRaza } = useParams();
    const dispatch = useDispatch();
    const { dog, loading, error } = useSelector(state => state.dogIdReducer);
    const { nombre, imagen, altura, peso, añosDeVida } = dog

    useEffect(() => {
        dispatch(fetchDogId(idRaza))
    }, [dispatch, idRaza])

    if (loading) { return (<h1>Cargando...</h1>) }
    if (error) { return (<h1>Error:</h1>) }
    console.log(dog)


    return (
        <section className={styles.detalles}>
            <h1>{nombre}</h1>
            <img src={imagen} alt={nombre} />

            <p>Altura aprox.: <span>{altura}</span></p>

            <p>Peso aprox.: <span>{peso}</span></p>

            <p>Esperanza de vida: <span>{añosDeVida}</span></p>
            
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