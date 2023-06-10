export const validateForm = (formData) => {
    const errors = {};

    if (formData.nombre.length === 0 || formData.imagen.length === 0 ||
        formData.peso.length === 0 || formData.altura.length === 0 ||
        formData.añosDeVida.length === 0) {

        errors.nombre = formData.nombre.length === 0 ? 'El nombre es obligatorio' : '';
        errors.imagen = formData.imagen.length === 0 ? 'La URL de la imagen es obligatoria' : '';
        errors.peso = formData.peso.length === 0 ? 'El peso es obligatorio' : '';
        errors.altura = formData.altura.length === 0 ? 'La altura es obligatoria' : '';
        errors.añosDeVida = formData.añosDeVida.length === 0 ? 'La espeanza de vida es obligatoria' : '';
    }

    if (formData.nombre.length < 3) {
        errors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    if (formData.imagen && !/\.(png|jpg)$/.test(formData.imagen)) {
        errors.imagen = 'La URL de la imagen debe ser un archivo PNG o JPG';
    }

    if (formData.peso && !/^[0-9 _-]+$/.test(formData.peso)) {
        errors.peso = 'El peso debe contener solo números, "-" y "_"';
    }

    if (formData.altura && !/^[0-9 _-]+$/.test(formData.altura)) {
        errors.altura = 'La altura debe contener solo números, "-" y "_"';
    }

    if (formData.añosDeVida && !/^[0-9 _-]+$/.test(formData.añosDeVida)) {
        errors.añosDeVida = 'La años debe contener solo números, "-" y "_"';
    }

    return errors;


};


export const validateLogin = (userData) => {
    const errors = {};

    if (userData.userName.trim().length === 0) {
        errors.userName = 'El usuario es obligatorio';
    }

    if (userData.password.trim().length === 0) {
        errors.password = 'La contraseña es obligatoria';
    }

    if (userData.userName !== 'lgramajo' || userData.password !== '123asd') {
        errors.credentials = 'Credenciales inválidas';
    }

    return errors;
};