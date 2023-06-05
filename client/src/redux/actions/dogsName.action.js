import axios from 'axios';
import {
    FETCH_DOGS_NAME_FAILURE,
    FETCH_DOGS_NAME_REQUEST,
    FETCH_DOGS_NAME_SUCCESS
} from '../actions-types/actions-types'

export function fetchDogNameFailure(error) {
    return { type: FETCH_DOGS_NAME_FAILURE, payload: error }
}

export function fetchDogNameRequest() {
    return { type: FETCH_DOGS_NAME_REQUEST }
}

export function fetchDogNameSuccess(dogsName) {
    return { type: FETCH_DOGS_NAME_SUCCESS, payload: dogsName }
}

export function fetchDogsName(name) {
    return async (dispatch) => {
        dispatch(fetchDogNameRequest())
        try {
            const response = await axios.get('http://localhost:3001/dogs/name', { params: { name: name } });
            const dogsName = response.data;
            console.log(response.data)

            dispatch(fetchDogNameSuccess(dogsName))
        } catch (error) {
            dispatch(fetchDogNameFailure(error))
        }
    }
}

