import { BUTTON_HAMBURGER, SECTION_ADMIN } from "../actions-types/actions-types";

const initialState = {
    isOpenHamburger: false,
    isAdmin: false,
}

function otrosReducer(state = initialState, action) {
    switch (action.type) {
        case BUTTON_HAMBURGER:
            return {
                ...state,
                isOpenHamburger: action.payload,
            }
        case SECTION_ADMIN:
            return {
                ...state,
                isAdmin: action.payload,
            }

        default: return state;
    }
}

export default otrosReducer;