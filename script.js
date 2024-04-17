const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});




// let inputTitle=document.getElementById("title")
// let inputAuthor=document.getElementById("author")
// let page=document.getElementById("page")

let myLibrary = [
    new Book("AAdu Jeevidham", "Benyamin", 108),
    new Book("Book of rows", "shebin", 21),
    new Book("Bigly Bob Gorbo", "The Art of Nuclear War", 109)
];
function Book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
}


function Addnewbook(addBook) {
    myLibrary.push(addBook)
    callbook();

}

function callbook() {
    const booklist = document.getElementById('juzt')
    juzt.innerHTML = '';


    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div')
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
        <h3>Title: ${book.title}</h3>
        <p>Author :${book.author}</p>
        <p>Pages: ${book.page}</p>
        <br>
        <button id="remov" onclick= "removeBook(${index})">Remove Book</button>`;
        booklist.appendChild(bookCard)
    });
}
function removeBook(index) {
    myLibrary.splice(index, 1);
    callbook();
}

document.getElementById("form-one").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const page = document.getElementById("page").value;

    const addBook = new Book(title, author, page);
    Addnewbook(addBook);
    //    document.getElementById("form-one").reset()

})
callbook();



