import {
  GET_ALL_RESTAURANTS,
  GetAllRestaurantsActionType,
} from "../actions/restaurants";

type infoType = {
  isLoading: boolean;
};

type initialStateType = {
  info: infoType;
};

const initialState = {
  info: {
    isLoading: false,
  },
};

type location = {
  address: string;
  crossStreet: string;
  lat: number;
  lng: number;
  postalCode: string;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress: Array<string>;
};

type contact = {
  formattedPhone: string;
  twitter: string;
  phone: number;
};

type restaurant = {
  name: string;
  category: string;
  location: location;
  contact: contact;
  backgroundImageURL: string;
};

type payloadType = {
  restaurants: Array<restaurant>;
};

export interface GetAllRestaurantsSuccessActionType {
  type: "GET_ALL_RESTAURANTS_SUCCESS";
  payload: payloadType;
}

export interface GetAllRestaurantsErrorActionType {
  type: "GET_ALL_RESTAURANTS_ERROR";
  error: string;
}

export default function reducer(
  state: initialStateType = initialState,
  action:
    | GetAllRestaurantsActionType
    | GetAllRestaurantsSuccessActionType
    | GetAllRestaurantsErrorActionType
) {
  switch (action.type) {
    case GET_ALL_RESTAURANTS:
      return { ...state, info: { ...state.info, isLoading: true } };

    case "GET_ALL_RESTAURANTS_SUCCESS":
      return {
        ...state,
        info: { ...state.info, isLoading: false },
        list: [...action.payload.restaurants],
      };

    case "GET_ALL_RESTAURANTS_ERROR":
      return {
        ...state,
        info: { ...state.info, isLoading: false, error: action.error },
      };

    default:
      return state;
  }
}
