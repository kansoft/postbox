import {createSelector} from 'reselect';

const getPosts = state => state.get("posts");
export const getFilters = state => state.getIn(["posts", "filters"]);

const getPostList = state => {
    const posts = state.getIn(["posts", "list"]);
    const filters = state.getIn(["posts", "filters"]);

    const filtered = posts.filter((item) => {
        //const isFilter = filters.every((f) => (String(item.get(f.get("key"))).toLocaleLowerCase().includes(String(f.get("value")).toLocaleLowerCase())));
        //const isFilter = filters.every((f) => (String(item.get(f.get("key"))).toLocaleLowerCase().includes((f.get("value").skipUntil(x => x.toLocaleLowerCase().match() )))));
        const isFilter = filters.every((f) => (String(item.get(f.get("key"))).toLocaleLowerCase().includes((f.get("value").skipUntil(x => x.toLocaleLowerCase().match(/item.get(f.get("key"))/) )))));
        //const isFilter = filters.every((f) => (String(f.get("value")).toLocaleLowerCase().includes(String(item.get(f.get("key"))).toLocaleLowerCase())));
        return isFilter;
    });

    return filtered;
};
export const getPostListState = createSelector(
    getPostList,
    (postsList) => postsList.toJS(),
);
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