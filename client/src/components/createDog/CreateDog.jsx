import { useState } from 'react';
import styles from '../createDog/CreateDog.module.css';
import { useDispatch } from 'react-redux';
import { createDog } from '../../redux/actions/dogsCreate.action';

function CreateDog() {
    const dispatch = useDispatch();
    // const { dog, error } = useSelector(state => state.dogsCreateReducer);

    const [countTemperaments, setCountTemperaments] = useState(1);
    const [createDogs, setCreateDogs] = useState({
        nombre: '',
        imagen: '',
        peso: '',
        altura: '',
        añosDeVida: '',
        temperamentos: []
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
    };

    return (
        <form className={styles.creacion} onSubmit={handleSubmit}>
            <input
                type="text"
                value={createDogs.nombre}
                onChange={(e) => setCreateDogs({ ...createDogs, nombre: e.target.value })}
                placeholder='Nombre / raza'
            />

            <input
                type="url"
                value={createDogs.imagen}
                onChange={(e) => setCreateDogs({ ...createDogs, imagen: e.target.value })}
                placeholder='Imagen del animal '
            />

            <input
                type="text"
                value={createDogs.peso}
                onChange={(e) => setCreateDogs({ ...createDogs, peso: e.target.value })}
                placeholder='Peso ej: (12 - 15)'
            />

            <input
                type="text"
                value={createDogs.altura}
                onChange={(e) => setCreateDogs({ ...createDogs, altura: e.target.value })}
                placeholder='Altura ej: (7 - 10)'
            />

            <input
                type="text"
                value={createDogs.añosDeVida}
                onChange={(e) => setCreateDogs({ ...createDogs, añosDeVida: e.target.value })}
                placeholder='Esperanza de vida.'
            />

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