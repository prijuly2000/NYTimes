import * as ActionTypes from "./ActionTypes";

export function initNews(pageNumber) {
    return {type: ActionTypes.INIT_NEWS_ITEMS, pageNumber};
};

export function initNewsSuccess(newsList, pageNumber) {
    return {type: ActionTypes.INIT_NEWS_ITEMS_SUCCESS, newsList, pageNumber};
}

export function initNewsFailure() {
    return {type: ActionTypes.INIT_NEWS_ITEMS_FAILURES};
}

export function openModal(item) {
    return {type: ActionTypes.OPEN_MODAL, item}
}

export function closeModal() {
    return {type: ActionTypes.CLOSE_MODAL}
}