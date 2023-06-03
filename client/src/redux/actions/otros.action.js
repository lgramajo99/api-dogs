import { BUTTON_HAMBURGER } from "../actions-types/actions-types";

export function switchHamburger(isOpenHamburger) {
    return { type: BUTTON_HAMBURGER, payload: !isOpenHamburger }
}