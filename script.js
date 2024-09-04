let myLibrary = [];

const booksGrid = document.querySelector('main');
const addBookBtn = document.querySelector('#add-book');
const addBookModal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const addBookForm = document.querySelector('.add-book-form');




function Book(title , author , pages, isRead = 0){
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

    removeBtn.onclick = () => removeBookFromLibrary(book);

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

const openAddBookModal = () => {
    addBookModal.classList.add('active');
    overlay.classList.add('active');
}

const closeAddBookModal = () => {
    addBookModal.classList.remove('active');
    overlay.classList.remove('active');
}

const getBookInformation = () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#is-read').checked ? 1 : 0;
    console.log({ title, author, pages, isRead });
    return new Book(title,author,pages,isRead);
}

const addBook = (event) => {
    event.preventDefault();
    const newBook = getBookInformation();
    addBookToLibrary(newBook);
    createBookCard(newBook);
    addBookForm.reset();
    closeAddBookModal();
}

const resetBooksGrid = () =>{
    booksGrid.innerHTML = '';
}

const updateBooksGrid = () => {
    resetBooksGrid();
    for(let book of myLibrary){
        createBookCard(book);
    }
}

function removeBookFromLibrary(bookToRemove){
    myLibrary = myLibrary.filter((book) => book !== bookToRemove );
    updateBooksGrid();
}

addBookBtn.onclick = openAddBookModal;
overlay.onclick = closeAddBookModal;
addBookForm.onsubmit = addBook;

const newBook = new Book('xd','xd','xd','Read');
createBookCard(newBook);

myLibrary.forEach(element => {
    console.log(element);
    
});

