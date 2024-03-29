import { useEffect } from 'react';
import styles from './Detalles.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogId } from '../../redux/actions/dogsId.action';
import Loading from '../loading/Loading';


function Detalles() {
    const { idRaza } = useParams();
    const dispatch = useDispatch();
    const { dog, loading, error } = useSelector(state => state.dogIdReducer);
    const { nombre, imagen, altura, peso, añosDeVida, temperaments, temperamentos } = dog

    useEffect(() => {
        dispatch(fetchDogId(idRaza))
    }, [dispatch, idRaza])

    if (loading) { return (<Loading />) }
    if (error) { return (<h1>Error: {error.message}</h1>) }

    return (
        <section className={styles.detalles}>
            <h1>{nombre}</h1>
            <img src={imagen} alt={nombre} />

            <p>Altura aprox.: <span>{altura}</span></p>

            <p>Peso aprox.: <span>{peso}</span></p>

            <p>Esperanza de vida: <span>{añosDeVida}</span></p>

            <h4>Temperamentos</h4>

            <ul>
                {Array.isArray(temperaments)
                    ? temperaments.map((temperament, index) => (
                        <li key={index}>{temperament.nombre}</li>
                    ))
                    : <li>{temperamentos}</li>
                }
            </ul>

        </section>
    )
}

export default Detalles;