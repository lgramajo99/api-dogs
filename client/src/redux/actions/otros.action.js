import { BUTTON_HAMBURGER, SECTION_ADMIN } from "../actions-types/actions-types";

export function switchHamburger(isOpenHamburger) {
    return { type: BUTTON_HAMBURGER, payload: !isOpenHamburger }
}

export function sectionAdmin(isAdmin) {
    return { type: SECTION_ADMIN, payload: isAdmin }
}