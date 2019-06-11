export function randomInt(upTo) {
    return Math.round(Math.random() * upTo);
}
export function randomAuthor() {
    const authors = ['Jak Kowalski', 'Tomasz Nowak', 'Janusz Gajos', 'Ryszard Rynkowski'];
    const index = Math.round(Math.random() * (authors.length-1));
    return authors[index];
}