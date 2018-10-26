import * as ActionTypes from "../actions/ActionTypes";

const initState = {
    status: "LOADING",
    currentPage: 0
};

export default function newsInfo(state = initState, action) {
    switch (action.type) {
        case ActionTypes.INIT_NEWS_ITEMS:
            return Object.assign({}, state, {
                status: "LOADING"
            });
        case ActionTypes.INIT_NEWS_ITEMS_SUCCESS:
            return Object.assign({}, state, {
                newsList: action.newsList,
                currentPage: action.pageNumber,
                status: "SUCCESS"
            });
        case ActionTypes.INIT_NEWS_ITEMS_FAILURES:
            return Object.assign({}, state, {
                status: "FAILED"
            });
        case ActionTypes.OPEN_MODAL:
            return Object.assign({}, state, {
                selectedItem: action.item,
            });
        case ActionTypes.CLOSE_MODAL:
            return Object.assign({}, state, {
                selectedItem: null
            });
        default:
            return state;
    }
}