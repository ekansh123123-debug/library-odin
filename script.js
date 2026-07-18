let myLibraray = [
    {
        id: crypto.randomUUID() ,
        author: "ram",
        title: "astro",
        info:"About astroname",
        numberPages:'5',
        checkBoxValue:true,
    },
    {
        id: crypto.randomUUID(),
        author: "shame",
        title: "non astro",
        info: "agaist astro",
        numberPages:'100',
        checkBoxValue: false
    },
    {
        id: crypto.randomUUID(),
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
        const newcheckBox = document.createElement("input");
        const newreadStatus = document.createElement("div");
        const newDeletebtn = document.createElement('button');
        
        
        newcheckBox.type="checkbox";

        newauthor.textContent = book.author;
        newinfo.textContent =  book.info;
        newtitle.textContent = book.title;
        newnumberPages.textContent = book.numberPages;

        if(book.checkBoxValue) {
            newreadStatus.textContent = 'Read';
            newcheckBox.checked = true;
        }
        else {
            newreadStatus.textContent = 'Not Read';
            newcheckBox.checked = false;
        }
        
        newcheckBox.addEventListener('change',(e) => {
            e.preventDefault();
            book.checkBoxValue = !book.checkBoxValue;
        });

        author.appendChild(newauthor);
        info.appendChild(newinfo);
        title.appendChild(newtitle);
        numberPages.appendChild(newnumberPages);
        read.appendChild(newreadStatus);
        title.appendChild(newcheckBox);
    }
}
const formSubmitFunction = (e) => {
    e.preventDefault();

    const authorInput = document.querySelector("#authorInput");
    const infoInput = document.querySelector("#infoInput");
    const titleInput = document.querySelector("#titleInput");
    const numberPagesInput = document.querySelector("#numberPagesInput")
    
    const checkBoxValue = document.querySelector("#readCheckBox").checked;
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

const deleatBoxEvent = () =>{

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
const deleatBox = document.querySelector("#delete");

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

addBookbtn.addEventListener("click", () => dialog.showModal());

form.addEventListener("submit",formSubmitFunction);

deleatBox.addEventListener("click",deleatBoxEvent);

updateDisplay();