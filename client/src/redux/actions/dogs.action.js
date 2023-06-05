import {
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_FAILURE,
    FETCH_DOGS_SUCCESS,
    CURRENT_PAGE,
    TOTAL_PAGES,
    ORDER,
    FILTER,
} from "../actions-types/actions-types";
import axios from 'axios'

export const fetchDogsRequest = () => {
    return { type: FETCH_DOGS_REQUEST }
}

export const fetchDogsSuccess = (dogs) => {
    return { type: FETCH_DOGS_SUCCESS, payload: dogs }
}

export const fetchDogsError = (error) => {
    return { type: FETCH_DOGS_FAILURE, payload: error }
}

export const turnPage = (currentPage) => {
    return { type: CURRENT_PAGE, payload: currentPage }
}

export const totalPage = (totalPage) => {
    return {
        type: TOTAL_PAGES,
        payload: Math.ceil(totalPage / 15)
    };
};

export const fetchDogs = () => {
    return async (dispatch, getState) => {
        const { currentPage } = getState().dogsReducer; // Obtiene currentPage del estado

        dispatch(fetchDogsRequest());

        try {
            const response = await axios.get('http://localhost:3001/dogs');
            const dogs = response.data;
            const itemsPerPage = 15;

            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;

            const dogsPerPage = dogs.slice(start, end);

            dispatch(fetchDogsSuccess(dogsPerPage));
            dispatch(totalPage(dogs.length));

        } catch (error) {
            dispatch(fetchDogsError(error));
        }
    };
};

export function orderBy(ordenBy) {
    return {
        type: ORDER,
        payload: ordenBy,
    }
}

export function filterBy(filtroBy) {
    return {
        type: FILTER,
        payload: filtroBy,
    }
}
