let myLibraray = [
    {
        author: "ram",
        titel: "astro",
        info:"About astroname"
    },
    {
        author: "shame",
        titel: "non astro",
        info: "agaist astro"
    },
    {
        author:"anu",
        titel: "another",
        info: "ajdf"
    }
];

function Book(title,author,info) {
    this.id = crypto.randomUUID();
    this.titel = title;
    this.author = author;
    this.info = info;
}

function addToLibrary(book) {
    myLibraray.push(book);
}

const newBookButtonEvent = (e) => {
    e.preventDefault();
    addBookToDisplay();
}
const addBookToDisplay = () => {
    author.textContent = "";
    info.textContent = "";
    titel.textContent = "";

    for (const book of myLibraray){
        const newauthor = document.createElement("div");
        const newinfo = document.createElement("div");
        const newtitel = document.createElement("div");
        
        newauthor.textContent = book.author;
        newinfo.textContent =  book.info;
        newtitel.textContent = book.titel;
        
        author.appendChild(newauthor);
        info.appendChild(newinfo);
        titel.appendChild(newtitel);
    }
}
const book = document.querySelector("#book");
const newBookButton = document.querySelector("#newBookButton");
const author = document.querySelector("#author");
const info = document.querySelector("#info");
const titel = document.querySelector("#titel");

newBookButton.addEventListener("click",newBookButtonEvent);
