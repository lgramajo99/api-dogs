import axios from 'axios';
import {
    FETCH_TEMPERAMENTS_FAILURE, FETCH_TEMPERAMENTS_REQUEST, FETCH_TEMPERAMENTS_SUCCESS

} from "../actions-types/actions-types";

export function fetchTemperamentsFailure(error) {
    return { type: FETCH_TEMPERAMENTS_FAILURE, payload: error }
}

export function fetchTemperamentsRequest() {
    return { type: FETCH_TEMPERAMENTS_REQUEST }
}

export function fetchTemperamentsSuccess(temperamentos) {
    return { type: FETCH_TEMPERAMENTS_SUCCESS, payload: temperamentos }
}

export function fetchTemperamentos() {
    return async (dispatch) => {
        dispatch(fetchTemperamentsRequest())
        try {
            const response = await axios.get('http://localhost:3001/temperaments');
            const data = response.data.slice(0, 30)

            dispatch(fetchTemperamentsSuccess(data))
        } catch (error) {
            dispatch(fetchTemperamentsFailure(error))
        }
    }
}
