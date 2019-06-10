import { createSelector } from 'reselect';

const getPosts = state => state.get("posts");
export const getPostState = createSelector(
    getPosts,
    (posts) => posts.toJS(),
);

const getComments = state => state.get("comments");
export const getCommentsState = createSelector(
    getComments,
    (comments) => comments.toJS(),
);
export const getCurrentPostId = state => state.get("currentPostId");