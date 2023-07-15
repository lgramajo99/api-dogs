import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { switchHamburger } from '../../redux/actions/otros.action.js';
import styles from './Nav.module.css'
import SearchBar from '../searchbar/SearchBar.jsx';


function Nav() {
    const { isOpenHamburger, isAdmin } = useSelector(state => state.otrosReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handlerHamburger = () => {
        dispatch(switchHamburger(isOpenHamburger))
    }

    const goHome = () => { navigate('/inicio') }

    return (<nav className={styles.nav}>

        <h1 className={styles.logo} onClick={goHome}>PI-Dogs</h1>

        <div className={styles.hamburger}>
            <button onClick={handlerHamburger}>{isOpenHamburger ? "|||" : "X"}</button>
            <ul className={`${isOpenHamburger ? styles.menuOff : styles.menu} `}>
                <li><SearchBar /></li>
                <li><Link to={'/inicio'}>Inicio</Link></li>
                <li><Link to={'/sobre-nosotros'}>Sobre nosotros</Link></li>
                {isAdmin && < li > <Link to={'/administracion'}>⚙</Link></li>}
            </ul>
        </div>
    </nav >)
}

export default Nav;