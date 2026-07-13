let myLibraray = [];

function Book(title,author) {
    this.id = crypto.randomUUID();
    this.titel = title;
    this.author = author;
}

function addToLibrary(book) {
    myLibraray.push(book);
}

const newBookButtonEvent = (e) => {
    e.preventDefault();
    const newBook = document.createElement("div")
}

const book = document.querySelector("#book");
const newBookButton = document.querySelector("#newBookButton");

newBookButton.addEventListener("click",newBookButtonEvent);
