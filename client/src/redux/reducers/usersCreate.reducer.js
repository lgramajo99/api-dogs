import { CREATE_USER_FAILURE, CREATE_USER_SUCCESS } from '../actions-types/actions-types';

const initialState = {
    data: [],
    error: null,
}

const userCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }

        default:
            return state;
    }
}

export default userCreateReducer;