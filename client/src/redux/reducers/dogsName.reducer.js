import {
    FETCH_DOGS_NAME_FAILURE,
    FETCH_DOGS_NAME_REQUEST,
    FETCH_DOGS_NAME_SUCCESS
} from '../actions-types/actions-types'

const initialState = {
    dogsName: [],
    loading: false,
    error: null
}

function dogsNameReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DOGS_NAME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_DOGS_NAME_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_DOGS_NAME_SUCCESS:
            return {
                ...state,
                loading: false,
                dogsName: action.payload
            }

        default:
            return state;
    }
}

export default dogsNameReducer;