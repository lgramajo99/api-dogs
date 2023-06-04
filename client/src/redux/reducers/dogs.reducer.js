import {
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_FAILURE,
    FETCH_DOGS_SUCCESS
} from "../actions-types/actions-types";

const initialState = {
    dogs: [],
    loading: false,
    error: null
}


function dogsReducer(state = initialState, action) {
    switch (action.payload) {
        case FETCH_DOGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case FETCH_DOGS_REQUEST:

            return {
                ...state,
                loading: true,
            }

        case FETCH_DOGS_SUCCESS:
            return {
                ...state,
                loading: false,
                dogs: action.payload,
            }

        default:
            return state
    }
}

export default dogsReducer;