import styles from './Order.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { orderBy } from '../../redux/actions/dogs.action';

function Order() {
    const dispatch = useDispatch();
    const { ordenBy } = useSelector(state => state.dogsReducer);

    const changeOrderBy = e => {
        dispatch(orderBy(e.target.value));
    }

    return (
        <div className={styles.ordenamiento}>
            <label htmlFor="order">Orden:</label>
            <select
                className={styles.selectOrder}
                id="order"
                value={ordenBy}
                onChange={changeOrderBy}>

                <option value="default">Default</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>

            </select>
        </div>
    )
}

export default Order;