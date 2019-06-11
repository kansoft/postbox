import {
    ADD_TO_FAVORITES,
    COMMENTS_DATA_FAILED,
    COMMENTS_DATA_REQUESTED, COMMENTS_DATA_SUCCEEDED, POSTS_DATA_FAILED, POSTS_DATA_REQUESTED,
    POSTS_DATA_SUCCEEDED, REMOVE_FROM_FAVORITES, SAVE_COMMENT_DATA
} from "./actions";
import {fromJS, mergeDeep, update} from "immutable";
import {randomAuthor} from "../helpers/random";

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
                .setIn(["posts", "list"], fromJS(action.data).update((list) => list.map((item, index) => item.set('author', randomAuthor()))
                ));
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
            console.log(state.getIn(["comments", "list"]).toOrderedSet());
            return state
                .setIn(["comments", "list"], (mergeDeep(state.getIn(["comments", "list"]), fromJS(action.data))).toOrderedSet().toList())
                .setIn(["comments", "loading"], false);
        }
        case COMMENTS_DATA_FAILED: {
            return state.setIn(["comments", "loading"], false);
        }
        case SAVE_COMMENT_DATA: {
            return state.setIn(["comments", "list"], (state.getIn(["comments", "list"])).merge(fromJS(action.data)));
        }
        case ADD_TO_FAVORITES: {
            return state.updateIn(["posts", "list"], ((list) => {
                const index = list.findIndex(((item) => {
                    return item.get("id") === action.id;
                }));
                return list.setIn([index, "favorite"], true);
            }));
        }
        case REMOVE_FROM_FAVORITES: {
            return state.updateIn(["posts", "list"], ((list) => {
                const index = list.findIndex(((item) => {
                    return item.get("id") === action.id;
                }));
                return list.setIn([index, "favorite"], false);
            }));
        }
        default: {
            return state;
        }
    }
};
