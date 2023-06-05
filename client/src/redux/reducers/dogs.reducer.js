import {
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_FAILURE,
    FETCH_DOGS_SUCCESS,
    CURRENT_PAGE,
    TOTAL_PAGES,

} from "../actions-types/actions-types";

const initialState = {
    dogs: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPage: 0,
}


function dogsReducer(state = initialState, action) {
    switch (action.type) {
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
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case TOTAL_PAGES:
            return {
                ...state,
                totalPage: action.payload,
            };
        default:
            return state
    }
}

export default dogsReducer;