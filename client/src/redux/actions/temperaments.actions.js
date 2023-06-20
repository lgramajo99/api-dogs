import axios from 'axios';
import {
    FETCH_TEMPERAMENTS_FAILURE, FETCH_TEMPERAMENTS_REQUEST, FETCH_TEMPERAMENTS_SUCCESS, SEASONS
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

export function seasonChange(season) {
    const months = ['enero', 'febrero', 'marzo',
        'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre',
        'octubre', 'noviembre', 'diciembre']

    let estaciones
    let mes = estaciones.getMonth()

    console.log(months[mes])

    if (mes >= 0 && mes <= 2) {
        season = 'verano'
        // return { type: SEASONS, payload: season }

    } else if (mes >= 3 && mes <= 5) {
        season = 'invierno'
        // return { type: SEASONS, payload: season }

    } else if (mes >= 6 && mes <= 8) {
        season = 'otoño'
        // return { type: SEASONS, payload: season }
    } else {
        season = 'primavera'
        // return { type: SEASONS, payload: season }
    }

    return { type: SEASONS, payload: season }
}


export function fetchTemperamentos() {
    return async (dispatch) => {
        dispatch(fetchTemperamentsRequest())
        try {
            const response = await axios.get('http://localhost:3001/temperaments');

            dispatch(seasonChange())

            const data = response.data.slice(0, 25)

            dispatch(fetchTemperamentsSuccess(data))
        } catch (error) {
            dispatch(fetchTemperamentsFailure(error))
        }
    }
}
