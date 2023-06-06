import {
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_FAILURE,
    FETCH_DOGS_SUCCESS,
    CURRENT_PAGE,
    TOTAL_PAGES,
    FILTER,
    ORDER,
} from "../actions-types/actions-types";

const initialState = {
    dogs: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 0,
    filtroBy: 'default',
    ordenBy: 'default',
    apiFilter: []
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
                apiFilter: action.payload,
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


        case ORDER:
            let sortedDogs;
            if (action.payload === 'asc') {
                sortedDogs = [...state.dogs].sort((a, b) => {
                    let idA = a.id;
                    let idB = b.id;

                    //si idA o idB comienzan con una "H", entonces extrae la Letra y conviertelo en numero;
                    if (idA[0] === 'H') { idA = parseInt(idA.slice(1)) };
                    if (idB[0] === 'H') { idB = parseInt(idB.slice(1)) };

                    return idA - idB; //orden ascendente
                });

            } else if (action.payload === 'desc') {
                sortedDogs = [...state.dogs].sort((a, b) => {
                    let idA = a.id;
                    let idB = b.id;

                    if (idA[0] === 'H') { idA = parseInt(idA.slice(1)) };
                    if (idB[0] === 'H') { idB = parseInt(idB.slice(1)) };

                    return idB - idA; //orden descendente
                });

            } else {
                sortedDogs = [...state.dogs]; // orden por default
            }

            return {
                ...state,
                dogs: sortedDogs,
                ordenBy: action.payload,
            };

        case FILTER:
            let apidog

            if (action.payload === 'DB') { apidog = [...state.dogs].filter(dog => dog.id[0] === 'H') }
            if (action.payload === 'API') { apidog = [...state.apiFilter].filter(dog => !isNaN(parseInt(dog.id))) }
            if (action.payload === 'default') { apidog = [...state.dogs] }
            return {
                ...state,
                dogs: apidog,
                filtroBy: action.payload
            }

        default:
            return state
    }
}

export default dogsReducer;