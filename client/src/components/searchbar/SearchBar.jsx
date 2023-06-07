import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogsName } from '../../redux/actions/dogsName.action';
import styles from './SearchBar.module.css';
import Loading from '../loading/Loading';

function SearchBar() {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const { dogsName, loading, error } = useSelector(state => state.dogsNameReducer);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchDogsName(searchText));
    };

    return (
        <div className={styles.search}>
            <form className={styles.buscador} onSubmit={handleSearch}>
                <input
                    className={styles.barra}
                    type="text"
                    placeholder="Buscar perro"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <input
                    className={styles.btn}
                    type="submit"
                    value="buscar"
                    disabled={loading}
                />
            </form>

            <ul className={styles.lista}>
                {loading ? (<li><Loading /></li>)
                    : error ? (<li>Error: {error.message}</li>)
                        : (dogsName?.map(({ id, nombre }) => <li key={id}><Link to={`/detalle/${id}`}>{nombre}</Link></li>))}
            </ul>
        </div>
    );
}

export default SearchBar;