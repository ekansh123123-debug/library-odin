let myLibraray = [
    {
        author: "ram",
        title: "astro",
        info:"About astroname"
    },
    {
        author: "shame",
        title: "non astro",
        info: "agaist astro"
    },
    {
        author:"anu",
        title: "another",
        info: "ajdf"
    }
];

function Book(title,author,info) {
    this.id = crypto.randomUUID();
    this.title = title;
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
    title.textContent = "";

    for (const book of myLibraray){
        const newauthor = document.createElement("div");
        const newinfo = document.createElement("div");
        const newtitle = document.createElement("div");
        
        newauthor.textContent = book.author;
        newinfo.textContent =  book.info;
        newtitle.textContent = book.title;
        
        author.appendChild(newauthor);
        info.appendChild(newinfo);
        title.appendChild(newtitle);
    }
}
const book = document.querySelector("#book");
const newBookButton = document.querySelector("#newBookButton");
const author = document.querySelector("#author");
const info = document.querySelector("#info");
const title = document.querySelector("#title");

newBookButton.addEventListener("click",newBookButtonEvent);

const dialog = document.querySelector("#dialogInterface");
const cancelBtn = document.querySelector("#closeBtn");
const addBookbtn = document.querySelector("#")

cancelBtn.addEventListener("click", () => dialog.showModal());
cancelBtn.addEventListener("click", () => dialog.close());
