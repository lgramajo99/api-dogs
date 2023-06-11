import {
    FETCH_TEMPERAMENTS_FAILURE, FETCH_TEMPERAMENTS_REQUEST, FETCH_TEMPERAMENTS_SUCCESS
} from '../actions-types/actions-types'

const initialState = {
    temperamentos: [],
    loading: false,
    error: null
}

function temperamentsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TEMPERAMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case FETCH_TEMPERAMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_TEMPERAMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                temperamentos: action.payload,
            }
        default:
            return state
    }
}

export default temperamentsReducer;