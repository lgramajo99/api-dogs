import { useState } from 'react';
import styles from '../createDog/CreateDog.module.css';
import { useDispatch } from 'react-redux';
import { createDog } from '../../redux/actions/dogsCreate.action';
import { validateForm } from './validations';

function CreateDog() {
    const dispatch = useDispatch();
    const [countTemperaments, setCountTemperaments] = useState(1);
    const [createDogs, setCreateDogs] = useState({
        nombre: '',
        imagen: '',
        peso: '',
        altura: '',
        añosDeVida: '',
        temperamentos: [],
    });
    const [error, setError] = useState({
        nombre: '',
        imagen: '',
        peso: '',
        altura: '',
        añosDeVida: '',
        temperamentos: [],
    });

    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < countTemperaments; i++) {
            inputs.push(
                <input
                    key={i}
                    type="text"
                    value={createDogs.temperamentos[i] || ''}
                    onChange={(e) => {
                        const newTemperaments = [...createDogs.temperamentos];
                        newTemperaments[i] = e.target.value;
                        setCreateDogs(prevState => ({
                            ...prevState,
                            temperamentos: newTemperaments
                        }));
                    }}
                    placeholder={`${1 + i}° temperamento`}
                />
            );
        }
        return inputs;
    };

    const handleAddTemp = () => {
        setCountTemperaments(countTemperaments + 1);
    };

    const handleRemoveTemp = () => {
        setCountTemperaments(countTemperaments - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(createDogs);

        if (Object.keys(errors).length === 0) {
            console.log(createDogs);
            dispatch(createDog(createDogs));

            setCreateDogs({
                nombre: '',
                imagen: '',
                peso: '',
                altura: '',
                añosDeVida: '',
                temperamentos: []
            });
            setCountTemperaments(1);

        } else { setError(errors); }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateDogs((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form className={styles.creacion} onSubmit={handleSubmit}>
            <input
                type="text"
                value={createDogs.nombre}
                onChange={handleChange}
                name="nombre"
                placeholder='Nombre / raza'
            />
            {error.nombre && <p className={styles.error}>{error.nombre}</p>}

            <input
                type="url"
                value={createDogs.imagen}
                onChange={handleChange}
                name='imagen'
                placeholder='Imagen del animal'
            />
            {error.imagen && <p className={styles.error}>{error.imagen}</p>}

            <input
                type="text"
                value={createDogs.peso}
                onChange={handleChange}
                name="peso"
                placeholder='Peso ej: (12 - 15)'
            />
            {error.peso && <p className={styles.error}>{error.peso}</p>}

            <input
                type="text"
                value={createDogs.altura}
                onChange={handleChange}
                name="altura"
                placeholder='Altura ej: (7 - 10)'
            />
            {error.altura && <p className={styles.error}>{error.altura}</p>}

            <input
                type="text"
                value={createDogs.añosDeVida}
                onChange={handleChange}
                name="añosDeVida"
                placeholder='Esperanza de vida.'
            />
            {error.añosDeVida && <p className={styles.error}>{error.añosDeVida}</p>}

            {renderInputs()}

            <div className={styles.temperamentos}>
                <input
                    type="button"
                    value={'-'}
                    onClick={handleRemoveTemp}
                    disabled={countTemperaments === 1}
                />
                <input
                    type="button"
                    value={'+'}
                    onClick={handleAddTemp}
                />
            </div>

            <button type='submit'>Crear</button>
        </form>
    );
}

export default CreateDog;
