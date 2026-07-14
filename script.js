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
    updateDisplay();
}
const updateDisplay = () => {
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
const formSubmitFunction = (e) => {
    e.preventDefault();

    const authorInput = document.querySelector("#authorInput");
    const infoInput = document.querySelector("#infoInput");
    const titleInput = document.querySelector("#titleInput");

    const authorValue = authorInput.value;
    const titleValue = titleInput.value;
    const infoValue = infoInput.value;

    const book = new Book(titleValue,authorValue,infoValue);

    addToLibrary(book);
    updateDisplay();

    form.reset();
    dialog.close();
}
const author = document.querySelector("#author");
const info = document.querySelector("#info");
const title = document.querySelector("#title");
const dialog = document.querySelector("#dialogInterface");
const addBookbtn = document.querySelector("#newBookButton")
const cancelBtn = document.querySelector("#closeBtn");
const form = document.querySelector("#form");


cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

addBookbtn.addEventListener("click", () => dialog.showModal());

form.addEventListener("submit",formSubmitFunction);
updateDisplay();