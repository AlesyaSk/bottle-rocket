import { takeEvery, put, call } from "redux-saga/effects";
import { getAllRestaurants } from "../api/restaurants";

function* fetchInfo() {
  try {
    const { data } = yield call(getAllRestaurants);
    yield put({ type: "GET_ALL_RESTAURANTS_SUCCESS", payload: data });
  } catch (e) {
    yield put({ type: "GET_ALL_RESTAURANTS_ERROR", error: e });
  }
}

export default function* actionWatcher() {
  yield takeEvery("GET_ALL_RESTAURANTS", fetchInfo);
}
