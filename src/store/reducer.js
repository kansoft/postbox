import {
    COMMENTS_DATA_FAILED,
    COMMENTS_DATA_REQUESTED, COMMENTS_DATA_SUCCEEDED, POSTS_DATA_FAILED, POSTS_DATA_REQUESTED,
    POSTS_DATA_SUCCEEDED, SAVE_COMMENT_DATA
} from "./actions";
import {fromJS} from "immutable";

const defaultState = fromJS({
    posts: {
        loading: false,
        list: [],
    },
    comments: {
        loading: false,
        list: [],
    },
    currentPostId: 0,
});

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case POSTS_DATA_REQUESTED: {
            return state.setIn(["isFetching"], true);
        }
        case POSTS_DATA_SUCCEEDED: {
            return state
                .setIn(["posts", "list"], fromJS(action.data))
                .setIn(["posts", "loading"], false);
        }
        case POSTS_DATA_FAILED: {
            return state.setIn(["posts", "loading"], false);
        }
        case COMMENTS_DATA_REQUESTED: {
            return state
                .setIn(["currentPostId"], fromJS(action.id))
                .setIn(["comments", "loading"], true);
        }
        case COMMENTS_DATA_SUCCEEDED: {
            return state
                .setIn(["comments", "list"], fromJS(action.data))
                //.setIn(["comments", "list"], (state.getIn(["comments", "list"])).mergeDeep(fromJS(action.data)))
                .setIn(["comments", "loading"], false);
        }
        case COMMENTS_DATA_FAILED: {
            return state.setIn(["comments", "loading"], false);
        }
        case SAVE_COMMENT_DATA: {
            return state.setIn(["comments", "list"], (state.getIn(["comments", "list"])).merge(fromJS(action.data)));
        }

        default: {
            return state;
        }
    }
};