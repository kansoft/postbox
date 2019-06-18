import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import {apiData} from "../helpers/apiData";
import {
    COMMENTS_DATA_REQUESTED,
    getCommentsDataFailed, getCommentsDataSucceeded, getPostsDataFailed, getPostsDataSucceeded,
    POSTS_DATA_REQUESTED
} from "./actions";

function* postsDataRequested() {
    try {
        const data = yield call(apiData, "/posts");
        yield put(getPostsDataSucceeded(data));
    } catch (error) {
        console.log(error);
        yield put(getPostsDataFailed(error));
    }
}

function* sagaPostsDataRequested() {
    yield takeLatest(POSTS_DATA_REQUESTED, postsDataRequested);
}

function* commentsDataRequested({id}) {
    try {
        const data = yield call(apiData, `/comments?postId=${id}`);
        yield put(getCommentsDataSucceeded(data));
    } catch (error) {
        console.error(error);
        yield put(getCommentsDataFailed(error));
    }
}

function* sagaCommentsDataRequested() {
    yield takeLatest(COMMENTS_DATA_REQUESTED, commentsDataRequested);
}

export default function* mainSaga() {
    yield all([
        fork(sagaPostsDataRequested),
        fork(sagaCommentsDataRequested),
    ]);
}
