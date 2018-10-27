// import { takeEvery } from "redux-saga/effects";
import { testSaga } from "redux-saga-test-plan";
import * as sagas from "../../src/sagas/defaultIndex";
import {newsApi} from "../../src/services/newsApi";
import {INIT_NEWS_ITEMS} from "../../src/actions/ActionTypes"
import {initNewsSuccess, initNewsFailure} from "../../src/actions/ActionCreators";

describe("defaultIndex Sagas test", () => {
    it("rootSaga saga should fire init saga", () => {
        testSaga(sagas.default)
            .next()
            .next()
            .isDone();
    });

    it("init saga should fire success action", () => {
        const pageNumber = 1;
        const newsList = "TEST"
        const apiOutput = {newsList};
        const action = {pageNumber};
        
        testSaga(sagas.init, action)
            .next()
            .call(newsApi, action.pageNumber)
            .next(apiOutput)
            .put(initNewsSuccess(newsList, pageNumber))
            .next()
            .isDone();
    });

    it("init saga should fire failed action", () => {
        const pageNumber = 1;
        const error = "TEST"
        const apiOutput = {error};
        const action = {pageNumber};
        
        testSaga(sagas.init, action)
            .next()
            .call(newsApi, action.pageNumber)
            .next(apiOutput)
            .put(initNewsFailure())
            .next()
            .isDone();
    });
});