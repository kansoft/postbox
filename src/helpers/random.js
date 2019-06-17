import {authors} from "./constants";

export function randomInt(upTo) {
    return Math.round(Math.random() * upTo);
}

export function randomAuthor() {
    const index = Math.round(Math.random() * (authors.length - 1));
    return authors[index];
}
