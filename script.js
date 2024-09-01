const myLibrary = [];

const booksGrid = document.querySelector('main');

function Book(title , author , pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);

}

const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookCard.classList.add('book-card');
    buttonGroup.classList.add('button-group');
    readBtn.classList.add('btn');
    removeBtn.classList.add('btn');

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'

    if (book.isRead) {
        readBtn.textContent = 'Read';
        readBtn.classList.add('btn-light-green');
    } else{
        readBtn.textContent = 'Not read'
        readBtn.classList.add('btn-light-red');
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);
    booksGrid.appendChild(bookCard);

}

const newBook = new Book('xd','xd','xd','Read');
createBookCard(newBook);

