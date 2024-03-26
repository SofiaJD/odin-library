const txtTitle = document.querySelector('#title');
const txtAuthor = document.querySelector('#author');
const btnAdd = document.querySelector('#btnAdd');

const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary() {
    title = txtTitle.value;
    author = txtAuthor.value;

    let newBook = new Book(title, author);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

btnAdd.addEventListener('click', function(e) {
    addBookToLibrary();
    e.preventDefault();

});
