let myLibraray = [
    {
        author: "ram",
        title: "astro",
        info:"About astroname",
        numberPages:'5',
        checkBoxValue:true,
    },
    {
        author: "shame",
        title: "non astro",
        info: "agaist astro",
        numberPages:'100',
        checkBoxValue: false
    },
    {
        author:"anu",
        title: "another",
        info: "ajdf",
        numberPages: '300',
        checkBoxValue:true
    }
];

function Book(title,author,info,numberPages,checkBoxValue) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.info = info;
    this.numberPages =numberPages;
    this.checkBoxValue = checkBoxValue;
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
    numberPages.textContent = "";
    

    for (const book of myLibraray){
        const newauthor = document.createElement("div");
        const newinfo = document.createElement("div");
        const newtitle = document.createElement("div");
        const newnumberPages = document.createElement("div");
        const newreadStatus = document.createElement("div");
        
        newauthor.textContent = book.author;
        newinfo.textContent =  book.info;
        newtitle.textContent = book.title;
        newnumberPages.textContent = book.numberPages;
        if(book.checkBoxValue) newreadStatus = 'Read';
        else newreadStatus = 'Not Read';
        
        author.appendChild(newauthor);
        info.appendChild(newinfo);
        title.appendChild(newtitle);
        numberPages.appendChild(newnumberPages);
    }
}
const formSubmitFunction = (e) => {
    e.preventDefault();

    const authorInput = document.querySelector("#authorInput");
    const infoInput = document.querySelector("#infoInput");
    const titleInput = document.querySelector("#titleInput");
    const numberPagesInput = document.querySelector("#numberPagesInput")
    const checkBoxValue = document.querySelector("readCheckBox").checked();

    const authorValue = authorInput.value;
    const titleValue = titleInput.value;
    const infoValue = infoInput.value;
    const numberPagesValue = numberPagesInput.value;

    const book = new Book(titleValue,authorValue,infoValue,numberPagesValue,checkBoxValue);

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
const numberPages=document.querySelector("#numberPages");
const read =document.querySelector("#read");


cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

addBookbtn.addEventListener("click", () => dialog.showModal());

form.addEventListener("submit",formSubmitFunction);