export const POSTS_DATA_REQUESTED = 'POSTS_DATA_REQUESTED';
export function getPostsDataRequested() {
    return {
        type: POSTS_DATA_REQUESTED,
    };
}
export const POSTS_DATA_SUCCEEDED = 'POSTS_DATA_SUCCEEDED';
export function getPostsDataSucceeded(data) {
    return {
        type: POSTS_DATA_SUCCEEDED,
        data,
    };
}
export const POSTS_DATA_FAILED = 'POSTS_DATA_FAILED';
export function getPostsDataFailed(e) {
    return {
        type: POSTS_DATA_FAILED,
        e,
    };
}


export const COMMENTS_DATA_REQUESTED = 'COMMENTS_DATA_REQUESTED';
export function getCommentsDataRequested(id) {
    return {
        id,
        type: COMMENTS_DATA_REQUESTED,
    };
}
export const COMMENTS_DATA_SUCCEEDED = 'COMMENTS_DATA_SUCCEEDED';
export function getCommentsDataSucceeded(data) {
    return {
        type: COMMENTS_DATA_SUCCEEDED,
        data,
    };
}
export const COMMENTS_DATA_FAILED = 'COMMENTS_DATA_FAILED';
export function getCommentsDataFailed(e) {
    return {
        type: COMMENTS_DATA_FAILED,
        e,
    };
}
export const SAVE_COMMENT_DATA = 'SAVE_COMMENT_DATA';
export function saveCommentData(data) {
    return {
        data,
        type: SAVE_COMMENT_DATA,
    };
}