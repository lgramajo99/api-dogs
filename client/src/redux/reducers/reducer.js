import { combineReducers } from 'redux';
import otrosReducer from './otros.reducer';
import dogsReducer from './dogs.reducer';
import dogIdReducer from './dogsId.reducer';


const rootReducer = combineReducers({
    otrosReducer,
    dogsReducer,
    dogIdReducer,
})

export default rootReducer;