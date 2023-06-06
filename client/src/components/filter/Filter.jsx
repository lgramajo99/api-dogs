import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterBy } from '../../redux/actions/dogs.action';


function Filter() {
    const dispatch = useDispatch()
    const { filtroBy } = useSelector(state => state.dogsReducer);

    const changeFilter = e => {
        const selectedFilter = e.target.value;
        dispatch(filterBy(selectedFilter));
        console.log(filterBy(selectedFilter))

    }

    return (
        <div className={styles.filtrado}>
            <label htmlFor="filter">Filtros:</label>

            <select
                className={styles.selectFilter}
                id="filter"
                value={filtroBy}
                onChange={changeFilter}>

                <option value="default" defaultValue={true}>Default</option>
                <option value="API">API externa</option>
                <option value="DB">Base de datos</option>
            </select>
        </div>

    )
}

export default Filter;