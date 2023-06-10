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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsers((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <section className={styles.landingpage}>
            {!isAdmin ? (
                <article className={styles.secciones}>
                    <h1>Entra y busca todos las razas que existen en el mundo.</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odit tempore nisi ex, aliquid optio eaque pariatur nihil architecto, eius, reprehenderit autem expedita saepe! Iure consectetur ex, odio eum, quos dignissimos maxime voluptatem aliquid debitis vero est facilis autem quas iste qui laudantium. Officiis esse ipsam sapiente rerum praesentium. Voluptatibus aliquam animi illum eum eos incidunt, voluptas velit sit repellendus officiis facere asperiores perspiciatis ducimus unde praesentium ea provident exercitationem deleniti eaque, rem autem explicabo porro! Maiores, earum totam! Modi voluptates impedit magni rem exercitationem nobis vero aliquam architecto! Fugiat exercitationem error laudantium cumque iure unde doloremque provident eveniet quo.</p>
                    <div>
                        <button onClick={enterAsGuest}>Entrar como invitado</button>
                        <button onClick={handlerAdmin}>Entrar como administrador</button>
                    </div>
                </article>
            ) : (
                <article className={styles.secciones}>
                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Usuario del administrador"
                            value={users.userName}
                            name='userName'
                            onChange={handleChange} />
                        {error.userName && <span className={styles.error}>{error.userName}</span>}

                        <input
                            type="password"
                            placeholder="contraseña"
                            value={users.password}
                            name='password'
                            onChange={handleChange} />

                        {error.password && <span className={styles.error}>{error.password}</span>}
                        {error.credentials && <span className={styles.error}>{error.credentials}</span>}

                        <button type='submit'>Entrar</button>
                    </form>

                    <button onClick={handlerAdmin}>Volver</button>
                </article>
            )}
        </section>
    );
}

export default Landing;
