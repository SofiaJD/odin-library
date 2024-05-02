const btnAdd = document.querySelector('#btnAdd');
const container = document.querySelector('#cardContainer');
const buttonModal = document.querySelector('#buttonModal');
const buttonCloseModal = document.querySelector('#btnClose');
const modal = document.querySelector('dialog');
const txtTitle = document.querySelector('#title');
const txtAuthor = document.querySelector('#author');
const txtPages = document.querySelector('#pages');
const cards = document.querySelectorAll('.card');

const myLibrary = [];

myLibrary.push(new Book('Book 1', 'author', '200', 'Read'));
myLibrary.push(new Book('Book 2', 'author', '400', 'Not Read'));
myLibrary.push(new Book('Book 3', 'author', '300', 'Read'));

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

buttonCloseModal.addEventListener('click', function()
{
    modal.close();
});

function addBookToLibrary() 
{
    let title = txtTitle.value;
    let author = txtAuthor.value;
    let pages = txtPages.value;
    let status = document.querySelector('input[type="radio"]:checked').value;

    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    console.log(myLibrary);
    container.innerHTML = '';
    showBooks();
}

btnAdd.addEventListener('click', function(e) 
{
    addBookToLibrary();
    e.preventDefault();
    modal.close();
});

function showBooks() {
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        card.innerHTML = `<h3>${book.title}</h3> <p>${book.author}</p>`

        const details = document.createElement('div');
        details.setAttribute('class', 'details');

        if (book.status == 'Read') {
            details.innerHTML = `<p>${book.pages} pages</p> <p class="read">${book.status}</p>`;
        } else {
            details.innerHTML = `<p>${book.pages} pages</p> <p class="notRead">${book.status}</p>`;
        }

        card.appendChild(details);

        const indexPara = document.createElement('p');
        indexPara.setAttribute('class', 'index');
        indexPara.setAttribute('style', 'color: transparent');
        indexPara.innerText = index;

        card.appendChild(indexPara);

        const btnChangeStatus = document.createElement('button');
        btnChangeStatus.setAttribute('class', 'btnChangeStatus');
        btnChangeStatus.innerText = 'Change status';

        card.appendChild(btnChangeStatus);

        btnChangeStatus.addEventListener('click', function()
        {
            if (myLibrary[index].status === 'Read') 
            {
                myLibrary[index].status = 'Not Read';
            } 
            else 
            {
                myLibrary[index].status = 'Read';
            }

            container.innerHTML = '';
            showBooks();
        });

        const br = document.createElement('br');
        card.appendChild(br);


        const btnDelete = document.createElement('button');
        btnDelete.setAttribute('class', 'btnDelete');

        const deleteIcon = document.createElement('span');
        deleteIcon.setAttribute('class', 'material-symbols-outlined');
        deleteIcon.innerText = 'heart_minus';

        btnDelete.appendChild(deleteIcon);

        card.appendChild(btnDelete);

        container.appendChild(card);

        btnDelete.addEventListener('click', function() {
            myLibrary.splice(index, 1);
            container.innerHTML = '';
            showBooks();
        });
    });
}


if(myLibrary.length < 1)
{
    container.innerHTML = 'There are no registered books.'
}
else 
{
    showBooks();
}