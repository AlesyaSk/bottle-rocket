export const GET_ALL_RESTAURANTS = "GET_ALL_RESTAURANTS";

export interface GetAllRestaurantsActionType {
  type: typeof GET_ALL_RESTAURANTS;
}

export const getAllRestaurants = (): GetAllRestaurantsActionType => {
  return {
    type: GET_ALL_RESTAURANTS,
  };
};
