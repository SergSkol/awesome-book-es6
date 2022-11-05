export default class BookShelf {
  constructor() {
    this.arrBooks = [];
    this.storageKey = 'awesomeBooks';
  }

  addBook(newTitle, newAuthor) {
    const newBook = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor,
    };

    this.arrBooks.push(newBook);
  }

  removeBook(id) {
    this.arrBooks = this.arrBooks.filter((book) => book.id !== id);
  }

  saveDataToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.arrBooks));
  }

  loadDataFromLocalStorage() {
    this.arrBooks = JSON.parse(localStorage.getItem(this.storageKey));
    if (this.arrBooks == null) {
      this.arrBooks = [];
    }
    this.showBooks();
  }

  showBooks() {
    function addElement(elementType, parent, className) {
      const element = document.createElement(elementType);
      element.classList.add(className);
      parent.appendChild(element);
      return element;
    }

    const bookList = document.querySelector('.book-list');
    this.arrBooks.forEach((book) => {
      const bookItem = addElement('div', bookList, 'book-item');
      const bookTitle = addElement('div', bookItem, 'book-title');
      bookTitle.innerHTML = `" ${book.title} "  +  by ${book.author}`;

      const bookRemoveButton = addElement(
        'button',
        bookItem,
        'book-remove-button',
      );
      bookRemoveButton.innerHTML = 'Remove';

      bookRemoveButton.addEventListener('click', () => {
        this.removeBook(book.id);
        this.saveDataToLocalStorage();
        window.location.reload();
      });
    });
  }
}
