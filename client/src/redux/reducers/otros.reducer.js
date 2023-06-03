import { BUTTON_HAMBURGER } from "../actions-types/actions-types";

const initialState = {
    isOpenHamburger: false,
}

function otrosReducer(state = initialState, action) {
    switch (action.type) {
        case BUTTON_HAMBURGER:
            return {
                ...state,
                isOpenHamburger: action.payload,
            }


        default: return state;
    }
}

export default otrosReducer;