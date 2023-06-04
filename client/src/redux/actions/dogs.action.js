import {
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_FAILURE,
    FETCH_DOGS_SUCCESS
} from "../actions-types/actions-types";

export const fetchDogsRequest = () => {
    return { type: FETCH_DOGS_REQUEST }
}

export const fetchDogsSuccess = (dogs) => {
    return { type: FETCH_DOGS_SUCCESS, payload: dogs }
}

export const fetchDogsError = (error) => {
    return { type: FETCH_DOGS_FAILURE, payload: error }
}

export const fetchDogs = () => {
    return async (dispatch) => {
        dispatch(fetchDogsRequest());

        try {
            const response = await axios.get('http://localhost:3001/dogs');
            const dogs = response.data;

            dispatch(fetchDogsSuccess(dogs))
        } catch (error) {
            dispatch(fetchDogsError(error))
        }
    }
}
