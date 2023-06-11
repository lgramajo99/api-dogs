import axios from 'axios';
import {
    CREATE_USER_FAILURE, CREATE_USER_SUCCESS
} from '../actions-types/actions-types';

export const createUserFailure = (error) => {
    return {
        type: CREATE_USER_FAILURE,
        payload: error,

    }
}

export const createUserSuccess = (data) => {
    return {
        type: CREATE_USER_SUCCESS,
        payload: data,
    }
}

export const createUser = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/usuario', data);
            dispatch(createUserSuccess(response.data));
        } catch (error) {
            dispatch(createUserFailure(error.message));
        }
    }
}