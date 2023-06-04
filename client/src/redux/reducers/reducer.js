import { combineReducers } from 'redux';
import otrosReducer from './otros.reducer';
import dogsReducer from './dogs.reducer';
import dogIdReducer from './dogsId.reducer';
import dogsNameReducer from './dogsName.reducer';

const rootReducer = combineReducers({
    otrosReducer,
    dogsReducer,
    dogIdReducer,
    dogsNameReducer,
})

export default rootReducer;