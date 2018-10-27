import { call, put, takeEvery } from "redux-saga/effects";
import {INIT_NEWS_ITEMS} from "../actions/ActionTypes"
import {newsApi} from "../services/newsApi";
import {initNewsFailure, initNewsSuccess} from "../actions/ActionCreators";
import "regenerator-runtime/runtime";

export function* init(action) {
    const {newsList, error} = yield call(newsApi, action.pageNumber);
    if (!newsList || error) {
        yield put(initNewsFailure());
    } else {
        yield put(initNewsSuccess(newsList, action.pageNumber));
    }
}

export default function* rootSaga() {
    yield takeEvery(INIT_NEWS_ITEMS, init);
}