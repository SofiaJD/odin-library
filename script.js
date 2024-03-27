const txtTitle = document.querySelector('#title');
const txtAuthor = document.querySelector('#author');
const btnAdd = document.querySelector('#btnAdd');
const container = document.querySelector('#container');

const myLibrary = [];

myLibrary.push(new Book('Libro 1', 'author'));
myLibrary.push(new Book('Libro 2', 'author'));
myLibrary.push(new Book('Libro 3', 'author'));

function Book(title, author) 
{
    this.title = title;
    this.author = author;
}

function addBookToLibrary() 
{
    title = txtTitle.value;
    author = txtAuthor.value;

    let newBook = new Book(title, author);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

btnAdd.addEventListener('click', function(e) 
{
    addBookToLibrary();
    e.preventDefault();
});

function showBooks()
{
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.setAttribute('id', 'card');

        card.innerHTML = `<h2>${book.title}</h2> <p>${book.author}</p>`

        container.appendChild(card);
    });
}

showBooks();
