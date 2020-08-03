import axios from "axios";

export const getAllRestaurants = (): Promise<any> =>
  axios.get(
    "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json"
  );
