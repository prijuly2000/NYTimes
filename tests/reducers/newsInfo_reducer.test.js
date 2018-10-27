import newsInfoReducer, {initState} from "../../src/reducers/newsInfo_reducer";
import * as ActionTypes from "../../src/actions/ActionTypes";
import { apiStatus } from "../../src/utils/Enums";

describe("newsInfo reducer test", () => {
    it("should change state for INIT_NEWS_ITEMS", () => {
        const action = {type: ActionTypes.INIT_NEWS_ITEMS}
        const newState = newsInfoReducer(initState, action);
        expect(newState).toEqual(initState);
    });

    it("should change state for INIT_NEWS_ITEMS_SUCCESS", () => {
        const newsList = "TEST";
        const pageNumber = 1;
        const status = apiStatus.SUCCESS;
        const action = {
            type: ActionTypes.INIT_NEWS_ITEMS_SUCCESS,
            newsList,
            pageNumber
        }
        const newState = newsInfoReducer(initState, action);
        expect(newState).toEqual({status, currentPage: pageNumber, newsList });
    });

    it("should change state for INIT_NEWS_ITEMS_FAILURES", () => {
        const action = { type: ActionTypes.INIT_NEWS_ITEMS_FAILURES }
        const newState = newsInfoReducer(initState, action);
        expect(newState).toEqual({ status: apiStatus.FAILED , currentPage: 0 });
    });

    it("should change state for OPEN_MODAL", () => {
        const item = "TEST";
        const action = { type: ActionTypes.OPEN_MODAL, item }
        const newState = newsInfoReducer(initState, action);
        expect(newState).toEqual(Object.assign({ selectedItem: item}, initState));
    });

    it("should change state for OPEN_MODAL", () => {
        const action = { type: ActionTypes.CLOSE_MODAL }
        const newState = newsInfoReducer(initState, action);
        expect(newState).toEqual(Object.assign({ selectedItem: null}, initState));
    });
});