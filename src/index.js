/***  examples/src/index.js ***/
import React from "react";
import { render } from "react-dom";
import NewsList from "./containers/NewsList";
import Pagination from "./containers/Pagination";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import {initNews} from "./actions/ActionCreators"
import rootSaga from "./sagas/defaultIndex";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

store.dispatch(initNews(0));

const App = () => (
    <div>
        <NewsList />
        <Pagination />
    </div>
);
render(<Provider store={store}><App /></Provider>, document.getElementById("root"));