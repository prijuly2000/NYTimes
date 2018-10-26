import { call, put, takeLatest } from "redux-saga/effects";
import {INIT_NEWS_ITEMS} from "../actions/ActionTypes"
import {newsApi} from "../services/newsApi";
import {initNewsFailure, initNewsSuccess} from "../actions/ActionCreators";
import "regenerator-runtime/runtime";

function* init(action) {
    const {newsList, error} = yield call(newsApi, action.pageNumber);
    if (!newsList || error) {
        yield put(initNewsFailure());
    } else {
        yield put(initNewsSuccess(newsList, action.pageNumber));
    }
}

export default function* rootSaga() {
    yield takeLatest(INIT_NEWS_ITEMS, init);
}