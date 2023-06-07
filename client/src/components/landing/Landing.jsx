import styles from './Landing.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { sectionAdmin } from '../../redux/actions/otros.action';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Landing() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [users, setUsers] = useState({ userName: '', password: '' })
    const [error, setError] = useState({ userName: '', password: '' })
    const { isAdmin } = useSelector(state => state.otrosReducer);

    const enterAsGuest = () => {
        navigate('/inicio')
    }
    const handlerAdmin = () => {
        dispatch(sectionAdmin(!isAdmin))
    }

    const validationLogin = () => {
        const errors = {};

        if (users.userName.trim().length === 0) {
            errors.userName = 'El usuario es obligatorio';
        }

        if (users.password.trim().length === 0) {
            errors.password = 'La contraseña es obligatoria';
        }

        if (users.userName !== 'lgramajo' || users.password !== '123asd') {
            errors.credentials = 'Credenciales inválidas';
        }

        setError(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validationLogin()) {

            navigate('/inicio')
            
        }
    }

    return (
        <section className={styles.landingpage}>

            {!isAdmin ?
                <article className={styles.secciones}>
                    <h1>Entra y encuentra todos los perros que existen en el mundo, te sorprenderás</h1>
                    <div>
                        <button onClick={enterAsGuest}>Entrar como invitado</button>
                        <button onClick={handlerAdmin}>Entrar como administrador</button>
                    </div>
                </article>
                :
                <article className={styles.secciones}>
                    <form onSubmit={handleSubmit} >
                        <input
                            type="text"
                            placeholder='Usuario del administrador'
                            value={users.userName}
                            onChange={(e) => setUsers({ ...users, userName: e.target.value })}
                        />
                        {error.userName && <span className={styles.error}>{error.userName}</span>}

                        <input
                            type='password'
                            placeholder='contraseña'
                            value={users.password}
                            onChange={(e) => setUsers({ ...users, password: e.target.value })}
                        />
                        {error.password && <span className={styles.error}>{error.password}</span>}
                        {error.credentials && <span className={styles.error}>{error.credentials}</span>}

                        <input
                            type="submit"
                            value="Entrar" />

                    </form>

                    <button onClick={handlerAdmin}>Volver</button>

                </article>
            }

        </section>
    )
}

export default Landing