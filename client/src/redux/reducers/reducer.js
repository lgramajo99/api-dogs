import { combineReducers } from 'redux';
import otrosReducer from './otros.reducer';
import dogsReducer from './dogs.reducer';

const rootReducer = combineReducers({
    otrosReducer,
    dogsReducer,
})

export default rootReducer;