import styles from './Order.module.css'

function Order() {
    return (
        <div className={styles.ordenamiento}>
            <label htmlFor="order">Orden:</label>
            <select className={styles.selectOrder} id="order" defaultValue="default">
                <option value="default">Default</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
    )
}

export default Order;