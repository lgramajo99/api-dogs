import {
    FETCH_DOGS_ID_FAILURE,
    FETCH_DOGS_ID_REQUEST,
    FETCH_DOGS_ID_SUCCESS,
} from '../actions-types/actions-types'

const initialState = {
    dog: [],
    loading: false,
    error: null,
}

function dogIdReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DOGS_ID_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_DOGS_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_DOGS_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                dog: action.payload,
            }
        default:
            return state
    }
}

export default dogIdReducer;