import {createSelector} from "reselect";

const getPostList = state => {
    const data = state.get("posts");
    const filters = state.getIn(["posts", "filters"]);

    const dataFiltered = data.updateIn(["list"], (list) => (
        list.filter((item) => {
            const isFilter = filters.every((f) => (String(item.get(f.get("key"))).toLocaleLowerCase().includes(String(f.getIn(["value", f.get("value").indexOf(String(item.get(f.get("key"))))])).toLocaleLowerCase())));
            return isFilter;
        })
    ));
    return dataFiltered;
};
export const getPostListState = createSelector(
    getPostList,
    (postsList) => postsList.toJS(),
);

const getComments = state => state.get("comments");
export const getCommentsState = createSelector(
    getComments,
    (comments) => comments.toJS(),
);
export const getCurrentPostId = state => state.get("currentPostId");
