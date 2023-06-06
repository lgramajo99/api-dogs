import { useState } from 'react';
import styles from '../createDog/CreateDog.module.css';

function CreateDog() {

    const [countTemperamnts, setCountTemperaments] = useState(1)
    const [createDog, setCreateDog] = useState({
        "nombre": '',
        "imagen": '',
        "peso": '',
        "altura": '',
        "añosDeVida": '',
        "temperamentos": []
    })

    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < countTemperamnts; i++) {
            inputs.push(
                <input
                    key={i}
                    type="text"
                    value={createDog.temperamentos[i] || ''}
                    onChange={(e) => {
                        const newTemperaments = [...createDog.temperamentos];
                        newTemperaments[i] = e.target.value;
                        setCreateDog({
                            ...createDog,
                            temperamentos: newTemperaments
                        });
                    }}
                    placeholder={`${1 + i}° temperamento`}
                />
            );
        }
        return inputs;
    };

    const handleAddTemp = () => { setCountTemperaments(countTemperamnts + 1) }
    const handleRemovTemp = () => { setCountTemperaments(countTemperamnts - 1) }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(createDog);

        setCreateDog({
            nombre: '',
            imagen: '',
            peso: '',
            altura: '',
            añosDeVida: '',
            temperamentos: []
        })
        setCountTemperaments(1);
    };


    return (
        <form className={styles.creacion} onSubmit={handleSubmit}>
            <input
                type="text"
                value={createDog.nombre}
                onChange={(e) => setCreateDog({ ...createDog, nombre: e.target.value })}
                placeholder='Nombre / raza' />

            <input
                type="url"
                value={createDog.imagen}
                onChange={(e) => setCreateDog({ ...createDog, imagen: e.target.value })}
                placeholder='Imagen del animal ' />

            <input
                type="text"
                value={createDog.peso}
                onChange={(e) => setCreateDog({ ...createDog, peso: e.target.value })}
                placeholder='Peso ej: (12 - 15)' />
            <input
                type="text"
                value={createDog.altura}
                onChange={(e) => setCreateDog({ ...createDog, altura: e.target.value })}
                placeholder='Altura ej: (7 - 10)' />
            <input
                type="text"
                value={createDog.añosDeVida}
                onChange={(e) => setCreateDog({ ...createDog, añosDeVida: e.target.value })}
                placeholder='Esperanza de vida.' />

            {renderInputs()}
            <div className={styles.temperamentos}>
                <input type="button" value={'-'} onClick={handleRemovTemp} disabled={countTemperamnts === 1 ? true : false} />
                <input type="button" value={'+'} onClick={handleAddTemp} />
            </div>

            <button type='submit'>Crear</button>
        </form>
    )
}

export default CreateDog;