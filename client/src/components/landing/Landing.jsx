import styles from './Landing.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { sectionAdmin } from '../../redux/actions/otros.action';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { validateLogin } from '../createDog/validations';

function Landing() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [users, setUsers] = useState({ userName: '', password: '' });
    const [error, setError] = useState({ userName: '', password: '', credentials: '' });
    const { isAdmin } = useSelector((state) => state.otrosReducer);

    const enterAsGuest = () => {
        navigate('/inicio');
    };

    const handlerAdmin = () => {
        dispatch(sectionAdmin(!isAdmin));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateLogin(users);

        if (Object.keys(errors).length === 0) {
            navigate('/inicio');
        } else {
            setError(errors);
        }
    };

    return (
        <section className={styles.landingpage}>
            {!isAdmin ? (
                <article className={styles.secciones}>
                    <h1>Entra y encuentra todos los perros que existen en el mundo, te sorprenderás</h1>
                    <div>
                        <button onClick={enterAsGuest}>Entrar como invitado</button>
                        <button onClick={handlerAdmin}>Entrar como administrador</button>
                    </div>
                </article>
            ) : (
                <article className={styles.secciones}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Usuario del administrador"
                            value={users.userName}
                            onChange={(e) => setUsers({ ...users, userName: e.target.value })}
                        />
                        {error.userName && <span className={styles.error}>{error.userName}</span>}

                        <input
                            type="password"
                            placeholder="contraseña"
                            value={users.password}
                            onChange={(e) => setUsers({ ...users, password: e.target.value })}
                        />
                        {error.password && <span className={styles.error}>{error.password}</span>}
                        {error.credentials && <span className={styles.error}>{error.credentials}</span>}

                        <input type="submit" value="Entrar" />
                    </form>

                    <button onClick={handlerAdmin}>Volver</button>
                </article>
            )}
        </section>
    );
}

export default Landing;
