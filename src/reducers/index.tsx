import { combineReducers } from 'redux';
import RestaurantsReducer from './restaurants';

export default combineReducers({
    restaurants: RestaurantsReducer,
});