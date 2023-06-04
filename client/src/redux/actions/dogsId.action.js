import axios from 'axios';
import {
    FETCH_DOGS_FAILURE,
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_SUCCESS
} from '../actions-types/actions-types'

export function fetchDogIdFailure(error) {
    return { type: FETCH_DOGS_FAILURE, payload: error }
}

export function fetchDogIdRequest() {
    return { type: FETCH_DOGS_REQUEST }
}

export function fetchDogIdSuccess(dog) {
    return { type: FETCH_DOGS_SUCCESS, payload: dog }
}

export function fetchDogId(idRaza) {
    return async (dispatch) => {
        dispatch(fetchDogIdRequest())

        try {
            const response = await axios.get(`http://localhost:3001/dogs/${idRaza}`);
            const dog = response.data

            dispatch(fetchDogIdSuccess(dog))

        } catch (error) {
            dispatch(fetchDogIdFailure(error))
        }

    }
}