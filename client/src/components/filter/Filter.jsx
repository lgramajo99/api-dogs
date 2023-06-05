import styles from './Filter.module.css';

function Filter() {
    return (
        <div className={styles.filtrado}>
            <label htmlFor="filter">Filtros:</label>

            <select className={styles.selectFilter} id="filter" defaultValue="default">
                <option value="default">Default</option>
                <option value="api">API externa</option>
                <option value="db">Base de datos</option>
            </select>
        </div>

    )
}

export default Filter;