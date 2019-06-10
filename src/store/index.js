import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import mainSaga from "./sagas";

let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(mainSaga);

export default store;
