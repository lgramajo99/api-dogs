import axios from 'axios';
import {
    FETCH_DOGS_FAILURE,
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_SUCCESS
} from '../actions-types/actions-types'

export function fetchDogNameFailure(error) {
    return { type: FETCH_DOGS_FAILURE, payload: error }
}

export function fetchDogNameRequest() {
    return { type: FETCH_DOGS_REQUEST }
}

export function fetchDogNameSuccess(dogs) {
    return { type: FETCH_DOGS_SUCCESS, payload: dogs }
}

export function fetchDogsName() {
    return async (dispatch) => {
        dispatch(fetchDogNameRequest())
        try {
            const response = await axios.get('http://localhost:3001/dogs/name',
                { params: { name: name } });
            
                const dogs = response.data;

            dispatch(fetchDogNameSuccess(dogs))
        } catch (error) {
            dispatch(fetchDogNameFailure(error))
        }
    }
}
