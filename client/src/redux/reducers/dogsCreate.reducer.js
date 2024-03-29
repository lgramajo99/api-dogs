import { CREATE_DOG_FAILURE, CREATE_DOG_SUCCESS } from "../actions-types/actions-types";

const initialState = {
    dog: [],
    error: null,
}

function dogsCreateReducer(state = initialState, action) {
    switch (action.type) {

        case CREATE_DOG_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case CREATE_DOG_SUCCESS:
            return {
                ...state,
                dog: action.payload,
                error: null,
            }

        default:
            return state
    }
}

export default dogsCreateReducer;