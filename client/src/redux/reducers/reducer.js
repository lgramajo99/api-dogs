import { combineReducers } from 'redux';
import otrosReducer from './otros.reducer';
import dogsReducer from './dogs.reducer';
import dogIdReducer from './dogsId.reducer';
import dogsNameReducer from './dogsName.reducer';
import dogsCreateReducer from './dogsCreate.reducer';
import temperamentsReducer from './temperaments.reducer'
import userReducer from './users.reducer';
import userCreateReducer from './usersCreate.reducer'

const rootReducer = combineReducers({
    otrosReducer,
    dogsReducer,
    dogIdReducer,
    dogsNameReducer,
    dogsCreateReducer,
    temperamentsReducer,
    userReducer,
    userCreateReducer
})

export default rootReducer;