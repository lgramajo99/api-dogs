import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.search}>
            <form className={styles.buscador} >
                <input
                    className={styles.barra}
                    type="text"
                    placeholder="Buscar perro"
                />
                <input className={styles.btn}
                    type="button"
                    value="buscar" />
            </form>

            <ul className={styles.lista}>
 
            </ul>
        </div>
    )
}

export default SearchBar;