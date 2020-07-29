
import { GET_ALL_RESTAURANTS } from '../actions/restaurants';

const initialState = {
    info: {
        isLoading: false
    }
};

export default function reducer(state = initialState, action: any) {

    switch (action.type) {
        case GET_ALL_RESTAURANTS:
            return { ...state, info: { ...state.info, isLoading: true } };

        case 'GET_ALL_RESTAURANTS_SUCCESS':
            return { ...state, info: {...state.info, isLoading: false},  list: [...action.payload.restaurants]};

        case 'GET_ALL_RESTAURANTS_ERROR':
            return { ...state, info: {...state.info, isLoading: false, error: action.error }};

        default:
            return state;
    }
}
