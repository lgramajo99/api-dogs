import axios from 'axios';
import {
    CREATE_DOG_FAILURE,
    CREATE_DOG_SUCCESS,
} from '../actions-types/actions-types';

export const createDogFailure = (error) => ({
    type: CREATE_DOG_FAILURE,
    payload: error
})

export const createDogSuccess = (dog) => ({
    type: CREATE_DOG_SUCCESS,
    payload: dog
})

export const createDog = (dog) => {
    return async (dispatch) => {
        try {

            const response = await axios.post('http://localhost:3001/dogs', dog)
            dispatch(createDogSuccess(response.data))
        } catch (error) {

            dispatch(createDogFailure(error))
        }
    }
}
