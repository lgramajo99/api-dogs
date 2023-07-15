import { useDispatch, useSelector } from 'react-redux'
import { fetchTemperamentos } from '../../redux/actions/temperaments.actions'
import Loading from '../loading/Loading'
import { useEffect } from 'react'
import styles from './Aside.module.css';

function Aside() {
    const dispatch = useDispatch()
    const { temperamentos, loading, error } = useSelector(state => state.temperamentsReducer)

    useEffect(() => {
        dispatch(fetchTemperamentos())
    }, [dispatch])

    return (
        <ul className={styles.listaTemp}>
            <h3>Lista de los 25 temperamentos mas comunes en los perros en verano.</h3>

            {loading ? <Loading />
                : (temperamentos.map(({ nombre }, index) => (<li key={index}>{nombre}</li>)))}

            {error && <p>{error.message}</p>}
        </ul >
    )
}

export default Aside;