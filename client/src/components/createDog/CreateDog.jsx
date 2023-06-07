import { useState } from 'react';
import styles from '../createDog/CreateDog.module.css';
import { useDispatch } from 'react-redux';
import { createDog } from '../../redux/actions/dogsCreate.action';

function CreateDog() {
    const dispatch = useDispatch();
    const [countTemperaments, setCountTemperaments] = useState(1);
    const [createDogs, setCreateDogs] = useState({
        nombre: '',
        imagen: '',
        peso: '',
        altura: '',
        añosDeVida: '',
        temperamentos: []
    });
    const [error, setError] = useState({
        nombre: '',
        imagen: '',
        peso: '',
        altura: '',
        añosDeVida: '',
        temperamentos: []
    });

    const validateForm = () => {
        const errors = {};
        if (createDogs.nombre.length === 0 || createDogs.imagen.length === 0 ||
            createDogs.peso.length === 0 || createDogs.altura.length === 0 ||
            createDogs.añosDeVida.length === 0) {

            errors.nombre = createDogs.nombre.length === 0 ? 'El nombre es obligatorio' : '';
            errors.imagen = createDogs.imagen.length === 0 ? 'La URL de la imagen es obligatoria' : '';
            errors.peso = createDogs.peso.length === 0 ? 'El peso es obligatorio' : '';
            errors.altura = createDogs.altura.length === 0 ? 'La altura es obligatoria' : '';
            errors.añosDeVida = createDogs.añosDeVida.length === 0 ? 'La espeanza de vida es obligatoria' : '';
        }

        if (createDogs.nombre.length < 3) {
            errors.nombre = 'El nombre debe tener al menos 3 caracteres';
        }

        if (createDogs.imagen && !/\.(png|jpg)$/.test(createDogs.imagen)) {
            errors.imagen = 'La URL de la imagen debe ser un archivo PNG o JPG';
        }

        if (createDogs.peso && !/^[0-9_-]+$/.test(createDogs.peso)) {
            errors.peso = 'El peso debe contener solo números, "-" y "_"';
        }

        if (createDogs.altura && !/^[0-9_-]+$/.test(createDogs.altura)) {
            errors.altura = 'La altura debe contener solo números, "-" y "_"';
        }

        if (createDogs.añosDeVida && !/^[0-9_-]+$/.test(createDogs.añosDeVida)) {
            errors.añosDeVida = 'La años debe contener solo números, "-" y "_"';
        }

        setError(errors);

        return Object.keys(errors).length === 0;
    };

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

        if (validateForm()) {
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
        }
    };

    return (
        <form className={styles.creacion} onSubmit={handleSubmit}>
            <input
                type="text"
                value={createDogs.nombre}
                onChange={(e) => setCreateDogs({ ...createDogs, nombre: e.target.value })}
                placeholder='Nombre / raza'
            />
            {error.nombre && <p className={styles.error}>{error.nombre}</p>}

            <input
                type="url"
                value={createDogs.imagen}
                onChange={(e) => setCreateDogs({ ...createDogs, imagen: e.target.value })}
                placeholder='Imagen del animal'
            />
            {error.imagen && <p className={styles.error}>{error.imagen}</p>}

            <input
                type="text"
                value={createDogs.peso}
                onChange={(e) => setCreateDogs({ ...createDogs, peso: e.target.value })}
                placeholder='Peso ej: (12 - 15)'
            />
            {error.peso && <p className={styles.error}>{error.peso}</p>}

            <input
                type="text"
                value={createDogs.altura}
                onChange={(e) => setCreateDogs({ ...createDogs, altura: e.target.value })}
                placeholder='Altura ej: (7 - 10)'
            />
            {error.altura && <p className={styles.error}>{error.altura}</p>}

            <input
                type="text"
                value={createDogs.añosDeVida}
                onChange={(e) => setCreateDogs({ ...createDogs, añosDeVida: e.target.value })}
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
