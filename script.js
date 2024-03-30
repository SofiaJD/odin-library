const txtTitle = document.querySelector('#title');
const txtAuthor = document.querySelector('#author');
const btnAdd = document.querySelector('#btnAdd');
const container = document.querySelector('#cardContainer');
const buttonModal = document.querySelector('#buttonModal');
const modal = document.querySelector('dialog');

const myLibrary = [];

myLibrary.push(new Book('Libro 1', 'author', '200', 'Read'));
myLibrary.push(new Book('Libro 2', 'author', '400', 'Not Read'));
myLibrary.push(new Book('Libro 3', 'author', '300', 'Read'));

function Book(title, author, pages, status) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

buttonModal.addEventListener('click', function() {
    modal.showModal();
});

function addBookToLibrary() 
{
    title = txtTitle.value;
    author = txtAuthor.value;

    let newBook = new Book(title, author);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

// btnAdd.addEventListener('click', function(e) 
// {
//     addBookToLibrary();
//     e.preventDefault();
// });

function showBooks()
{
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        card.innerHTML = `<h3>${book.title}</h3> <p>${book.author}</p>`

        const details = document.createElement('div');
        details.setAttribute('class', 'details');

        if(book.status == 'Read')
        {
            details.innerHTML = `<p>${book.pages} pages</p> <p class="read">${book.status}</p>`;
        }
        else
        {
            details.innerHTML = `<p>${book.pages} pages</p> <p class="notRead">${book.status}</p>`;
        }

        card.appendChild(details);

        container.appendChild(card);
    });
}

showBooks();
