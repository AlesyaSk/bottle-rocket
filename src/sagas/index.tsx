import { all } from "redux-saga/effects";
import RestaurantSaga from "./restaurants";

export default function* rootSaga() {
  yield all([RestaurantSaga()]);
}
