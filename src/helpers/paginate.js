export function paginate(data, perPage, currPage) {
    const lastPostIndex = currPage * perPage;
    const firstPostIndex = lastPostIndex - perPage;
    return data.slice(firstPostIndex, lastPostIndex);
}