export const POSTS_DATA_REQUESTED = "POSTS_DATA_REQUESTED";

export function getPostsDataRequested() {
    return {
        type: POSTS_DATA_REQUESTED,
    };
}

export const POSTS_DATA_SUCCEEDED = "POSTS_DATA_SUCCEEDED";

export function getPostsDataSucceeded(data) {
    return {
        type: POSTS_DATA_SUCCEEDED,
        data,
    };
}

export const POSTS_DATA_FAILED = "POSTS_DATA_FAILED";

export function getPostsDataFailed(e) {
    return {
        type: POSTS_DATA_FAILED,
        e,
    };
}


export const COMMENTS_DATA_REQUESTED = "COMMENTS_DATA_REQUESTED";

export function getCommentsDataRequested(id) {
    return {
        id,
        type: COMMENTS_DATA_REQUESTED,
    };
}

export const COMMENTS_DATA_SUCCEEDED = "COMMENTS_DATA_SUCCEEDED";

export function getCommentsDataSucceeded(data) {
    return {
        type: COMMENTS_DATA_SUCCEEDED,
        data,
    };
}

export const COMMENTS_DATA_FAILED = "COMMENTS_DATA_FAILED";

export function getCommentsDataFailed(e) {
    return {
        type: COMMENTS_DATA_FAILED,
        e,
    };
}

export const SAVE_COMMENT_DATA = "SAVE_COMMENT_DATA";

export function saveCommentData(data) {
    return {
        data,
        type: SAVE_COMMENT_DATA,
    };
}

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export function addToFavorites(id) {
    return {
        id,
        type: ADD_TO_FAVORITES,
    };
}

export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export function removeFromFavorites(id) {
    return {
        id,
        type: REMOVE_FROM_FAVORITES,
    };
}

export const SORT_POSTS_BY_PARAM = "SORT_POSTS_BY_PARAM";

export function sortPostsByParam(order, orderBy) {
    return {
        order,
        orderBy,
        type: SORT_POSTS_BY_PARAM,
    };
}

export const FILTER_POSTS = "FILTER_POSTS";

export function filterPosts(filters) {
    return {
        filters,
        type: FILTER_POSTS,
    };
}