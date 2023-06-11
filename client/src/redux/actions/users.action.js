import axios from 'axios';
import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
} from '../actions-types/actions-types'

export function fetchUserFailure(error) {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
export function fetchUserRequest() {
    return {
        type: FETCH_USERS_REQUEST,
    }
}
export function fetchUserSuccess(data) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data,
    }
}

export function fetchUsers() {
    return async (dispatch) => {
        dispatch(fetchUserRequest())
        try {
            const data = axios.get('http://localhost:3001/usuario');
            dispatch(fetchUserSuccess(data))
            
        } catch (error) {
            dispatch(fetchUserFailure(error.message))
        }
    }
}